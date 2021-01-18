export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    next()
    // console.log(to)
  })
}
