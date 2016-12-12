var fs= require("fs");
var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();

// Create a domain
var domain1 = domain.create();

domain1.on('error', function(err){
   console.log("domain1 handled this error ("+err.message+")");
});

// Explicit binding 
domain1.add(emitter1);

emitter1.on('error',function(err){
   console.log("listener handled this error ("+err.message+")");
});

emitter1.emit('error',new Error('To be handled by listener'));

emitter1.removeAllListeners('error');

emitter1.emit('error',new Error('To be handled by domain1'));

var domain2 = domain.create();

domain2.on('error', function(err){
   console.log("domain2 handled this error ("+err.message+")");
});

// Implicit binding
domain2.run(function(){
   var emitter2 = new EventEmitter();
   emitter2.emit('error',new Error('To be handled by domain2'));   
});


domain1.remove(emitter1);
emitter1.emit('error', new Error('Converted to exception. System will crash!'));

Now run the main.js to see the result −

$ node main.js

Verify the Output.

listener handled this error (To be handled by listener)
domain1 handled this error (To be handled by domain1)
domain2 handled this error (To be handled by domain2)

events.js:72 throw er; // Unhandled 'error' event
         ^
Error: Converted to exception. System will crash!
   at Object. (/web/com/1427722220_30772/main.js:40:24)
   at Module._compile (module.js:456:26)
   at Object.Module._extensions..js (module.js:474:10)
   at Module.load (module.js:356:32)
   at Function.Module._load (module.js:312:12)
   at Function.Module.runMain (module.js:497:10)
   at startup (node.js:119:16)
   at node.js:906:3

Previous Page
Print
Next Page  
Advertisements
img img img img img img

