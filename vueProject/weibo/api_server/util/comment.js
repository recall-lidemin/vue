const sql = require('./db')

module.exports = {
    get(callback) {
        let sqlStr = 'select * from comment'
        sql.sqlBuff(sqlStr, (err, data) => {
            if (err) {
                return callback(err)
            }
            callback(null, data)
        })

    },
    add(contents, callback) {
        let sqlStr = `insert into comment values(${contents.id},'${contents.content}','${contents.date}')`
        sql.sqlBuff(sqlStr, (err, data) => {
            if (err) {
                return callback(err)
            }
            callback(null, data)
        })
    }
}