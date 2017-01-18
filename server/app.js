//==================create server and read file =====================

// var http = require('http');
// var fs = require('fs');


//  http.createServer(function(req, res){
      
//      var readData = fs.readFile('./first/second/paragraph.txt', function(err, data){
//          if(err){
//              return console.log(err);
//          }
//          else{
//              res.end(data.toString());
//          }
//      });

// }).listen(3000);
// console.log('server is running on console port 3000');






var http = require('http');

http.createServer(function(req, res){
res.end('server is running');
}).listen(4000);
console.log('server is working on port 4000');