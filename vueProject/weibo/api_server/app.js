const express = require('express')
const router = require('./router/commentRouter')

const app = express()

app.use(express.static('./static'))
app.use(express.static('./node_modules'))

app.use(router)

app.listen(8080, (err) => {
    console.log('server is running');
})