require("dotenv").config()
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const jwt = require('jsonwebtoken')
const dayjs = require('dayjs')
const DataBase = require('./db/db')
const db = new DataBase()

const utils = require('./utils/utils')
const authenticationRoutes = require('./routes/authentication')

const secret = process.env.JWT_SECRET || 'secret'

const app = new Koa()
const router = new Router()

router
  .post('/custom_error', (ctx, next) => {
    ctx.throw(400, 'test error')
  })
  .post('/default_error', (ctx, next) => {
    throw new Error()
  })
  .get('/api/data', async (ctx, next) => {
    ctx.body = ctx.state.jwtPayload.username
  })

utils.injectRoutes(router, authenticationRoutes)

app
  .use(bodyParser())
  .use(async (ctx, next) => {
    ctx.db = db
    await next()
  })
  .use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      //TODO: log error
      console.log(err)
      ctx.status = err.statusCode || err.status || 500
      ctx.body = err.message
    }
  })
  .use(async (ctx, next) => {
    if (/^\/api/.test(ctx.request.url)) {
      const accessToken = ctx.cookies.get('access_token')
      if (!accessToken) ctx.throw(403, 'No access token found')
      try {
        const jwtPayload = jwt.verify(accessToken, secret)
        ctx.state.jwtPayload = jwtPayload
        if (jwtPayload.expire < dayjs().unix()) { // token expired
          const payload = { username: jwtPayload.username, expire: dayjs().unix() }
          const token = jwt.sign(payload, secret)
          ctx.state.token = token
          ctx.state.jwtPayload = jwt.verify(token, secret)
        }
      } catch (err) {
        ctx.throw(401, 'Failed to verify token')
      }
    }
    await next()
  })
  .use(router.routes())
  .use(async (ctx, next) => {
    if (ctx.state.token) {
      ctx.cookies.set('access_token', ctx.state.token, { httpOnly: true, /*secure: true, */maxAge: 3600000 })
    }
    await next()
  })
  .use(router.allowedMethods())
  .listen(3001)
