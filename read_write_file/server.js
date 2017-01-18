
//==============create server and read text file ======================


// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res){

//     fs.readFile('paragraph.txt', function(Error, data){
//         if(Error){
//             console.log('Error');
//         }
//         else{
//             res.end(data.toString());
//         }
//     });

// }).listen(4000);
// console.log('server is working on console port 4000');








// var http = require('http');
// var fs = require('fs');

// var ans = '';

// if (fs.existsSync('write_paragraph.txt')){
       
//             ans = 'exist';
//     }
//     else{
//             ans = 'not exist';
//     };


// http.createServer(function(req, res){

// res.write(ans);
//     res.end();
// }).listen(3000);

// console.log('server is runninng on console port 3000');





// ======================write file ====================================



var http = require('http');
var fs = require('fs');


http.createServer(function(request, response){

fs.writeFile('./paragraph.txt', 'first paragraph inserted an text file using node js', function(err, data){

    if(err){
        throw err;
    }
    else{
        res.end('data write successfully');
    }

});

}).listen(3000);

console.log('working');