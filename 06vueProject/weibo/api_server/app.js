const express = require('express')
const router = require('./router/commentRouter')
const {
    getIPAdress
} = require('./util/ipAdress')

const app = express()

app.use(express.static('./static'))
app.use(express.static('./node_modules'))

app.all('*', (req, res, next) => {
    console.log(`${(new Date()).toLocaleString()}:来自${req.connection.remoteAddress} 访问了 ${req.method}-${req.url}`)
    res.header('Access-Control-Allow-Origin', req.headers.origin) // 需要显示设置来源
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Credentials', true) // 带cookies
    next()
})

app.use(router)

app.listen(8080, (err) => {
    console.log('----------------------------------------------------------------------')
    console.log('  微博发布项目后端服务器启动')
    console.log('  web服务器开始工作.....')
    console.log(`  服务器基地址： http://${getIPAdress()}:${8080} 查看状态`)
    console.log('* 请不要关闭本窗口，也不要使用鼠标在本窗口中选取任何内容 *')
    console.log('----------------- ctrl + c 可以结束本服务器 --------------------------')

})