const   port = 3002,
        bodyParser = require('body-parser'),
        express = require('express'),
        server = express()

const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended : true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is running in port ${port}`)
})

module.exports = server