// 本文件夹作用
// 1.遍历controllers所有文件 
// 2.将所有文件exports导出来的函数遍历  
// 3.将遍历出来的get发送get请求 post就发送post请求  
// 4.for循环实现的最终效果其实是将所有有效的代码遍历到了app.js中，将所有代码进行了拼接，只不过我们看不到。


const fs = require('fs')
// 将文件中的get或者post遍历出来并发送对应的请求
function addMapping (router, mapping) {
  for (var url in mapping) {
    if (url.startsWith('GET')) {

      var path = url.substring(4)
      router.get(path, mapping[url])
    } else if (url.startsWith('POST')) {
      var path = url.substring(4)
      router.post(path, mapping[url])
      // console.log(path)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}
// 遍历controller中的文件
function addControllers (router) {
  var files = fs.readdirSync(__dirname + '/controllers')
  var js_files = files.filter((f) => {
    return f.endsWith('.js')
  })
  console.log(js_files)

  for (var f of js_files) {
    let mapping = require(__dirname + '/controllers/' + f)
    addMapping(router, mapping)
    // console.log(mapping)
  }
}

module.exports = function (dir) {
  let controllers_dir = dir || 'controllers' //如果不传参默认是controllers目录
  let router = require('koa-router')()
  addControllers(router, controllers_dir)
  return router.routes()
}

