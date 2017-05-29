const   port = 3002,
        bodyParser = require('body-parser'),
        express = require('express'),
        server = express()

server.use(bodyParser.urlencoded({ extended : true }))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running in port ${port}`)
})

module.exports = server