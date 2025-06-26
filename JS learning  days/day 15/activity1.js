// Activity 1: Sync and Async code diff

// synchronous code -- execute in order
// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');



// Asynchronous code -- execute not in order but using EventLoop
// setTimeout(function () {
//     console.log('third ,setTimeout function');
// }, 2000);

// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');

// o/p
// first
// second
// third ,setTimeout function
