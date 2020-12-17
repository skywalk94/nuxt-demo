export default ({
  app
}) => {
  app.router.afterEach((to, from, next) => {
    console.log(to.name)
  })
}
