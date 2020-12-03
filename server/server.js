const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = new Router()

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

app
  .use(bodyParser())
  .use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.statusCode
      ctx.body = err.message
    }
  })
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001)