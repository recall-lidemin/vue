const express = require('express')
const bodyParser = require('body-parser')
const comment = require('../util/comment')

const router = express.Router()
// 配置处理post请求传值
router.use(bodyParser.urlencoded({
    extended: false
}))
// 配置中间件，集中处理CORS跨域设置请求头
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

router.get('/get', (req, res) => {
    comment.get((err, data) => {
        if (err) {
            return res.send({
                code: 400,
                msg: '获取数据失败'
            })
        }
        res.send(data)
    })
})

router.post('/add', (req, res) => {
    comment.add(req.body, (err, data) => {
        if (err) {
            return res.send({
                code: 400,
                msg: '插入失败'
            })
        }
        res.send({
            code: 200,
            msg: '插入成功'
        })

    })

})

router.delete('/del', (req, res) => {

})

module.exports = router