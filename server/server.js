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
    console.log(ctx.request.body)
    ctx.body = 'Hello Koa'
  })


app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001)