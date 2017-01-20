


//=================== Read file ==============================


// var http = require('http');
// var fs = require('fs');
// http.createServer(function(request, response){
//     fs.readFile('./new.txt', function(err, data){
//         if(err){
//             console.log(err);
//         }
//         else{
//             response.end(data);
//         }
//     });
// }).listen(3000);
// console.log('started');



//======================Write File ==============================



// var http = require('http');
// var fs = require('fs');
// http.createServer(function(request, response){
//     fs.writeFile('./new.txt','hello world', function(err, data){
//         if(err){
//             console.log(err);
//         }
//         else{
//             response.end(data);
//         }
//     });
// }).listen(3000);
// console.log('started');



//======================Delete File ==============================



// var http = require('http');
// var fs = require('fs');
// http.createServer(function(request, response){
//     fs.unlink('./new.txt', function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             response.end(data);
//         }
//     });
// }).listen(3000);
// console.log('started');


// ======================Rename File =====================================



// var http = require('http');
// var fs = require('fs');
// http.createServer(function(request, response){
//     fs.rename('./abc.txt','first.txt', function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             response.end('file rename successfully');
//         }
//     });
// }).listen(3000);
// console.log('started');


// ========================Read Data file =================================


// var http = require('http');
// var fs = require('fs');
// http.createServer(function(request, response){
//     fs.readFile('first.txt', function(err, data){
//         if(err){
//             console.log(err);
//         }
//         else{
//             response.end(data.toString());
//         }
//     });
// }).listen(3000);
// console.log('started');


// ========================update file =================================

// var http = require('http');
// var fs = require('fs');
// http.createServer(function(request, response){
//     fs.readFile('first.txt', function(err, data){
//         var a ='';

//         if(err){
//             console.log(err);
//         }
//         else{
//           a =  data.toString();
//         }
//        if(!a== ''){
//            a = 'update data';
//            response.end('data updated');
//        }
//        else{
//            response.write('does not exist');
//        }
//     });
// }).listen(3000);
// console.log('started');


var http = require('http');
http.createServer(function(request, response){
response.end('server is running');
}).listen(4000);
console.log('started');



