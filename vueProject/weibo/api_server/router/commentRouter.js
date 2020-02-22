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
            console.log(err);
            return res.send({
                code: 400,
                msg: '获取数据失败'
            })
        }
        res.send(data)
    })
})

router.post('/add', (req, res) => {
    if (req.body.content === '') {
        return res.send({
            code: 400,
            msg: '内容不能为空'
        })
    }
    comment.add(req.body, (err, data) => {
        if (err) {
            console.log(err);
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

router.get('/del', (req, res) => {
    comment.del(req.query.id, (err, data) => {
        if (err) {
            console.log(err);
            return res.send({
                code: 400,
                msg: '删除失败'
            })
        }
        res.send({
            code: 200,
            msg: '删除成功'
        })
    })
})

module.exports = router