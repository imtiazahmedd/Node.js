
//========================Express server =========================================

// var express = require('express');
// var app = express();

// app.get('/', function(request, response){
//     response.end('welcome to express server');
// }).listen('3000');
// console.log('server is running');



// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.send('hello world');
// });

// app.listen(3000);


//=====================app locals =========================

// app.locals.title = 'my App';
// app.strftime = require('strftime');
// app.email = 'abc@gmail.com';


//===================app.mountpath ========================
// ====================route change ===========================

// var express = require('express');

// var app = express();
// var admin = express();

// app.get('/' ,function(req, res){
//     console.log(admin.mountpath);
//     res.end('Admin HomePage');
// }).listen('4000');
// app.use('/admin', admin);
// admin.get('/' ,function(req, res){
//     console.log(admin.mountpath);
//     res.end('with in Admin HomePage');
// })
// admin.get('/dashboard' ,function(req, res){
//     console.log(admin.mountpath);
//     res.end('with in Admin HomePage');
// })



// var express = require('express');
// var app = express();
// var admin = express();
// var user = express();


// app.get('/', function(req,res){
//     res.end('HomePage');
// }).listen('3000');

// app.use('/admin', admin);
// admin.get('/', function(req, res){
//     res.end('admin panal');
// });


// app.use('/user', user);
// user.get('/', function(req, res){
//     res.end('user_login_page');
// });


// console.log('running');



// var express = require('express');
// var admin = express();
// var app = express();

// admin.get('/home', function(req, res){
//     res.send('admin HomePage');
// }).listen('3000');

// var secret = express();
// secret.get('/', function(req, res){
//     res.send('admin secret');
// });
// admin.use('/secret', secret);
// app.use('/admin', admin);

// console.log('running');


// ===========================app.on =============================

// var express = require('express');
// var admin = express();
// var app = express();

// admin.on('mount', function (parent) {
//   console.log('Admin Mounted');
//   console.log(parent); // refers to the parent app
// }).listen('3000');

// admin.get('/', function (req, res) {
//   res.send('Admin Homepage');
// });

// app.use('/admin', admin);



//===================================app.all ==========================

// var express = require('express');
// var app = express();
// var admin = express();
// app.all('/secret', function (req, res, next) {
//   res.write('Accessing the secret section ...');
//   next();
// }).listen('3000');

// app.get('/secret', function(req, res){
//     res.end('askldf');
// })
// console.log('running');



