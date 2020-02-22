/**
 * 封装数据操作模块
 * LDM
 * 2020-2-22
 * 
 *  */
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345123',
    database: 'mydatabase',
    port: 3306
});

const sqlBuff = (sql, callback) => {
    pool.getConnection((err, conn) => {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, (qerr, vals, fields) => {
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr, vals, fields);
            });
        }
    });
}


module.exports = {
    sqlBuff
}