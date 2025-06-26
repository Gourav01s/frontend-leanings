//Activity 3: Promise chaining -- promise return other promise

// let promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('setimeout1 started');
//     }, 2000);
//     resolve('promise4 resolveds');
// });

// promise4.then((valueOfP4) => {
//     console.log(valueOfP4);
//     let promise5 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('settimeout2 started');
//         }, 3000);
//         resolve('promise5 resolved');
//     });
//     return promise5;
// }).then((data) => console.log(data));

// o/p
// promise4 resolveds
// promise5 resolved
// setimeout1 started
// settimeout2 started

