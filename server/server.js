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
const { GENERATE_TOKEN } = require('./utils/actions')

const secret = process.env.JWT_SECRET || 'secret'

const app = new Koa()
const router = new Router()

router
  .get('/api/data', async (ctx, next) => {
    ctx.body = ctx.state.jwtPayload.userId
  })
  // .post('/custom_error', (ctx, next) => {
  //   ctx.throw(400, 'test error')
  // })
  // .post('/default_error', (ctx, next) => {
  //   throw new Error()
  // })

utils.injectRoutes(router, authenticationRoutes)

app
  .use(bodyParser())
  .use(async (ctx, next) => { // database link middleware
    ctx.db = db
    await next()
  })
  .use(async (ctx, next) => { // error middleware
    try {
      await next()
    } catch (err) {
      //TODO: log error
      console.log(err)
      ctx.status = err.statusCode || err.status || 500
      ctx.body = err.message
    }
  })
  .use(async (ctx, next) => { // token validation middleware
    if (/^\/api/.test(ctx.request.url)) {
      const accessToken = ctx.cookies.get('access_token')
      if (!accessToken) ctx.throw(403, 'No access token found')
      try {
        const jwtPayload = jwt.verify(accessToken, secret)
        ctx.state.jwtPayload = jwtPayload
        if (jwtPayload.expire < dayjs().unix()) { // token expired
          ctx.state[GENERATE_TOKEN] = { userId: jwtPayload.userId }
        }
      } catch (err) {
        ctx.throw(401, 'Failed to verify token')
      }
    }
    await next()
  })
  .use(router.routes())
  .use(async (ctx, next) => { // action handler middleware
    if (ctx.state[GENERATE_TOKEN]) { // generate authentication token
      const jwtPayload = { userId: ctx.state[GENERATE_TOKEN].userId, expire: dayjs().unix() }
      const token = jwt.sign(jwtPayload, secret)
      ctx.state.jwtPayload = jwtPayload
      ctx.cookies.set('access_token', token, { httpOnly: true, /*secure: true, */maxAge: 3600000 })
    }
    await next()
  })
  .use(router.allowedMethods())
  .listen(3001)
