const injectRoutes = (router, routes) => {
  Object.keys(routes).forEach(route => {
    router[routes[route][0]](route, routes[route][1])
  })
}

module.exports = injectRoutes
