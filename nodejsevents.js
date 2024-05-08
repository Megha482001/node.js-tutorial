const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('please turn off the motor!');
  setTimeout(() => {
    console.log('please turn off the motor ! its a gentle reminder')
  }, 3000); // setTimeout doesn't block the code
});//setTimeout runs when everything has done

console.log("the script is running")
myEmitter.emit('WaterFull');
console.log("the script is still running")