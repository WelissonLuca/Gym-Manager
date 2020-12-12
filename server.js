const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.set("view engine", "njk")
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(routes)




nunjucks.configure('views',{
    express: server,
    autoescape: false,
    noCache: true,
    watch:true

    
})






server.listen(5000, () => {
    console.log("Server Is Running")
})
