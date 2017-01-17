var http = require('http');

http.createServer(function(req, res){

    console.log(res);
    res.end('server running on port 3000');
 }).listen(3000);
console.log('server is running');
