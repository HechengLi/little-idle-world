require("dotenv").config()
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const dayjs = require('dayjs')
const DataBase = require('./db/db')
const db = new DataBase()

const User = require('./entity/user')
const UserRepository = require('./repository/userRepository')

const app = new Koa()
const router = new Router()

const secret = process.env.JWT_SECRET || 'secret'
const saltRounds = 10

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello Koa'
  })
  .post('/', (ctx, next) => {
    ctx.body = 'Hello Koa'
  })
  .post('/custom_error', (ctx, next) => {
    ctx.throw(400, 'test error')
  })
  .post('/default_error', (ctx, next) => {
    throw new Error()
  })
  .post('/auth', async (ctx, next) => {
    const connection = await db.getConnection()
    const userRepository = new UserRepository()

    const data = ctx.request.body
    const schema = Joi.object({
      username: Joi.string()
        .alphanum()
        .required(),
      password: Joi.string()
        .required()
    })
    const validation = schema.validate(data)
    if (validation.error) {
      ctx.throw(422, validation.error)
    }

    const { username, password } = data
    const user = await userRepository.findByUsername(connection, username)
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      ctx.throw(401, 'Incorrect username/password')
    }
    const payload = { username, expire: dayjs().unix() }
    const token = jwt.sign(payload, secret)
    ctx.body = token
    ctx.cookies.set("access_token", token, { httpOnly: true, /*secure: true, */maxAge: 3600000 })
  })
  .post('/register', async (ctx, next) => {
    const connection = await db.getConnection()
    const userRepository = new UserRepository()
    const schema = Joi.object({
      username: Joi.string()
        .alphanum()
        .min(4)
        .max(30)
        .required(),
      password: Joi.string()
        .min(8)
        .max(30)
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
    })

    const data = ctx.request.body
    const validation = schema.validate(data)
    data.password = await bcrypt.hash(data.password, saltRounds)
    if (validation.error) {
      ctx.throw(422, validation.error)
    }
    await userRepository.insert(connection, new User(data))
    ctx.body = null
  })
  .get('/data', async (ctx, next) => {
    ctx.body = ctx.request.jwtPayload.username
  })

app
  .use(bodyParser())
  .use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      //TODO: log error
      ctx.status = err.statusCode || err.status || 500
      ctx.body = err.message
    }
  })
  .use(async (ctx, next) => {
    if (ctx.request.url !== '/auth' && ctx.request.url !== '/register') {
      const accessToken = ctx.cookies.get('access_token')
      if (!accessToken) ctx.throw(403, 'No access token found')
      try {
        ctx.request.jwtPayload = jwt.verify(accessToken, secret)
      } catch (err) {
        ctx.throw(401, 'Failed to verify token')
      }
    }
    await next()
  })
  .use(async(ctx, next) => {
    if (ctx.request.url !== '/auth' && ctx.request.url !== '/register') {
      if (ctx.request.jwtPayload.expire < dayjs().unix()) { // token expired
        const payload = { username: ctx.request.jwtPayload.username, expire: dayjs().unix() }
        const token = jwt.sign(payload, secret)
        ctx.cookies.set("access_token", token, { httpOnly: true, /*secure: true, */maxAge: 3600000 })
      }
    }
    await next()
  })
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001)
