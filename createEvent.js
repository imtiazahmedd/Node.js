// var envents = require('events');
// var eventsEmitter = new envents.EventEmitter();


// var connectionHandler = function  connection() {
//     console.log('connection successfully');
//     eventsEmitter.emit('data_recieve');
// }  


// eventsEmitter.on('data_recieve', connectionHandler);


// eventsEmitter.on('data_recieve', function () {
//     console.log('data recieve successfully');
// });

// eventsEmitter.emit('connection');

// console.log('programe ended');


// Import events module
var events = require('events');

//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// console.log(eventEmitter.on());
//Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection successful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received successfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

