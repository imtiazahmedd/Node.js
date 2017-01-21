
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
// app.all('*', function (req, res, next) {
//   console.log('all');
//   res.write('Accessing the secret section ...');
//   next();
// }).listen('3000');

// app.get('/secret/id', function(req, res){
//   console.log('console');
//     res.end('askldf');
// })
// console.log('running');

//===============================app.delete ===========================


// var express = require('express');
// var app = express();

// app.delete('/delete', function(req, res){
//   res.end('delete request to homepage');
// }).listen('3000');
// app.get('/delete', function(req, res){
//   res.end('delete method running');
// });
// console.log('running');


//==============================app.disable ==========================

// var express = require('express');
// var app = express();

// app.disabled('trust proxy');

// false;

//================================app.enable ============================

// var express = require('express');
// app.enable('trust proxy');
// app.get('trust proxy');
// => true



//==========================app.disabled ===============================

// var express = require('express');

// app.disabled('trust proxy');
// => true

// app.enable('trust proxy');
// app.disabled('trust proxy');
// => false


//=======================ap.enabled =================================

// var express = require('express');

// app.enabled('trust proxy');
// => false

// app.enable('trust proxy');
// app.enabled('trust proxy');
// => true



