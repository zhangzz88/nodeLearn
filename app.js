// 本文件夹作用：最终的汇总文件夹，具体的复杂代码都已近抽离出去。
// controllers文件将各个模块进行了汇总，我们直接在app.js汇总使用汇总完成的代码即可
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controllers')
const app = new Koa()

app.use(bodyParser())
app.use(controller())

// 在端口3000监听:
app.listen(3000)
console.log('app started at port 3000...')