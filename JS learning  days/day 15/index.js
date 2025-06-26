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



// Activity 4: use of async-await to add some delay to wait for complition of execution

// async function utility() {
    
//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('weather is hot in delhi');
//         }, 5000);
//     });
    
//     let hydWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('weather is cool in hydrabad');
//         }, 7000);
//     });
//     let dW = delhiWeather;
//     let hW = hydWeather;

//     return [dW, hW];
    
// }

// utility().then((data) => console.log(data));




// Activity 5: fetch api and there related operations

// Task 1: GET data from api using fetch

// async function utility() {
//     let content = await fetch('url-goes-here');
//     // fetch returns promise
//     // convert the content to json format for easy use
//     let output = await content.json();
//     console.log(output);

// }

// utility();


// Task 2: POST data to api by fetch method

// async function utilityFetch() {
    
//     // this will be invoked by fetch method to post data
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'box',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     // content stores the data from fetch-api
//     let content = fetch('url/posts', options);
//     let response = (await content).json();
//     return response;
// }

// async function utilityAnswer() {
//     let ansr = utilityFetch();
//     console.log(ansr);
// }

// utilityFetch();




// Activity 6: Clauser property of function
// bundle of function - any variable declared in outer-function will be accesable from inner-function

function outerFunction() {
    let name = 'fullName';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

let a = outerFunction();
a(); // fullName

// Explanation:
// here a() is accessing the displayName function of outerFunction
// but how does the a() is able to access the name value
// even after ending of execution of outerFunction() was finnished earlier
// and variables are deleted outside there scope
// this is CLOSURE property - where functionality of innerFunction And
// data and parameter values are stored for later use


// note:
// nested functions => Closure => have REFRENCE to variable from outer function NOT value .

// each nested function will have a Closure of it