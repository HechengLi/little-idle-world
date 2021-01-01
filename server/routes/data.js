const dataRoutes = {
  '/api/data': ['get', async (ctx, next) => {
    ctx.body = ctx.state.jwtPayload.userId
    await next()
  }]
}

module.exports = dataRoutes
