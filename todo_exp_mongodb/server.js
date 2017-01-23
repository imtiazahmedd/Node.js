var express = require('express');   //load express module
var MongoClient = require('mongodb').MongoClient;   //load mongodb module


var app = express();                // use express module

var db                              //save database with collection

MongoClient.connect('mongodb://localhost:27017/todoapp', (err, database) => {   //mongodb connection string
  if (err) return console.log(err)
  else{
      console.log('connection successfully');
  }
  db = database
  
  
})

app.set('view engine', 'ejs');                      //set view templete using ejs module


app.get('/', function(req, res){                    //get server request
    

    // display data from mongo db into console
    db.collection('mytodo').find().toArray(function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
            res.render('index.ejs',  {mydata: data});    //send data to index.ejs
        }
    });


})



app.listen('3000');                             //listen server on 3000 port