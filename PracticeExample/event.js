//import event module
var events= require('events');
// create an eventEmitter obj
var eventEmitter = new events.EventEmitter();
//  create eventhandler
var connectHandler = function connected()
{
console.log('connected successfully');
eventEmitter.emit('data recieved');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data recived',function(){
console.log('data recived succefully');
});
eventEmitter.emit('connection');
console.log('prog ended');

