const dataRoutes = {
  '/api/data': ['get', async (ctx, next) => {
    ctx.body = ctx.state.jwtPayload.userId
  }]
}

module.exports = dataRoutes
