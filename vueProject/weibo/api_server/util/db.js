/**
 * 封装数据操作模块
 * LDM
 * 2020-2-22
 * 
 *  */
const mysql = require('mysql')

const sqlBuff = (sql, callback) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345123',
        database: 'mydatabase'
    })
    connection.connect()
    connection.query(sql, (err, data) => {
        if (err) throw err
        callback(null, data)
    })
}
let cont = {
    id: 222,
    content: "我是测试数据",
    date: "2018-12-12"
}
// console.log(cont.content);

// let sqlStr = `insert into comment values(${cont.id},'${cont.content}','${cont.date}')`
// sqlBuff(sqlStr, (err, data) => {
//     console.log(data);
// })
module.exports = {
    sqlBuff
}