// console.log("welcome to node js server");
// var name = require('./mymodule');
// console.log(name);
var http = require('http');
http.createServer(function (req, res){
    res.end('server is working');
}).listen(3000);
console.log("server is running on port 3000");
