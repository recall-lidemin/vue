const express = require('express')
const bodyParser = require('body-parser')
const comment = require('../util/comment')

const router = express.Router()

// 配置处理post请求传值
router.use(bodyParser.urlencoded({
    extended: false
}))

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

    comment.query(req.body.id, (err, data) => {
        if (err) {
            console.log(err)
        }
        if (data.length !== 0) {
            return res.send({
                code: 400,
                msg: 'ID已存在,不允许重复添加'
            })
        }
    })

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

    comment.query(req.query.id, (err, data) => {
        if (err) {
            return res.send({
                code: 400,
                msg: '查询出错'
            })
        }
        if (data.length === 0) {
            return res.send({
                code: 400,
                msg: 'ID不存在,无法删除'
            })
        }
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
})

router.get('/query', (req, res) => {
    comment.query(req.query.id, (err, data) => {
        console.log(data);
    })
})

module.exports = router