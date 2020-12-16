require("dotenv").config()
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dayjs = require('dayjs')

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
    const { username, password } = ctx.request.body
    if (!username) ctx.throw(422, 'Username required')
    if (!password) ctx.throw(422, 'Password required')
    const match = await bcrypt.compare(password, await bcrypt.hash('password', saltRounds))
    if (
      username !== 'username'
      || !match
    ) {
      ctx.throw(401, 'Incorrect username/password')
    }
    const payload = { username, expire: dayjs().unix() }
    const token = jwt.sign(payload, secret)
    ctx.body = token
    ctx.cookies.set("access_token", token, { httpOnly: true, /*secure: true, */maxAge: 3600000 })
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
      throw err
    }
  })
  .use(async (ctx, next) => {
    if (ctx.request.url !== '/auth') {
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
    if (ctx.request.url !== '/auth') {
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
