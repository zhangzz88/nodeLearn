var fn_index = async (ctx, next) => {
  ctx.response.body = `
  <h1>Index</h1>
  <form action="/signin" method="post">
    <p>Name: <input name="name" value="koa"></p>
    <p>Password: <input name="password" type="password"></p>
    <p><input type="submit" value="Submit"></p>
  </form>
  `
}

var fn_signin = async (ctx, next) => {
  console.log('进行了post请求')
  var name = ctx.request.body.name || ''
  var password = ctx.request.body.password || ''

  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>欢迎你,${name}</h1>`
  } else {
    ctx.response.body = `<h1>账号密码错误</h1>`
  }
}
module.exports = { 'GET/': fn_index, "POST/signin": fn_signin }

// export default { 'GET/': fn_index, "POST/signin": fn_signin }