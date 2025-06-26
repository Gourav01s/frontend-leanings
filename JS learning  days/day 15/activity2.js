// Activity 2: Promises


// task 1: sync execution with promise

// let promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('this is inside promise1 and timeout is 5s');
//     }, 5000);
// });

// let promise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('this is inside promise2 and timeout is 3s');
//     }, 3000);
// });

// console.log('statement writen after promises');
// o/p
// statement writen after promises
// this is inside promise2 and timeout is 3s
// this is inside promise1 and timeout is 5s

// Task 2: use of data return by resolve  in promise

// let promise3 = new Promise((resolve, reject)=>{
//     setTimeout(function () {
//         console.log('this is inside promise3 and timeout is 2s');
//     }, 2000);
//     resolve('resolve data or statement');
//     reject(new Error('there is some error in promise3'));
// });

// // to handle resolve and reject states of
// promise3
//     .then((data) => { console.log(data) })
//     .catch((err)=>{console.log(err)});

