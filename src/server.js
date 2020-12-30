const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("../src/routes");
const methodOverride = require("method-override");

const server = express();

server.use(express.urlencoded({
    extended: true
}));
server.set("view engine", "njk");
server.use(express.static("public"));
server.use(methodOverride("_method"));
server.use(routes);

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true,
    watch: true,
});

server.listen(5000, () => {
    console.log("Server Is Running");
});
