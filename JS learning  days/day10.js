// Activity 1: Promise async await and try-catch

// function isBreadAvilable() {
//     return false;
// }

// function isEggAvilable() {
//     return false;
// }

// function bringBread() {
//     return new Promise((resolve, reject) => {
//         if (isBreadAvilable()) {
//             resolve("here is requested bread.");
//         }else if (isEggAvilable()) {
//             resolve("here is requested eggs.")
//         }
//         else {
//             reject('Both bread and egg are not avilable.');
//         }
//     });
// }

// console.log(bringBread());

// bringBread().then(data => {
//     console.log(data);
// }).catch(e => {
//     console.log(e,'this is from catch block.');
// })

// // doing the above operation with async-await

// async function final() {
//     try {
//         const myData = await bringBread();
//         console.log(myData, 'this is executed after await operaton');
//         return myData;
//     } catch (error) {
//         return Promise.reject(error);
//         // return console.log(error);
//     }
// }

// // this is for further processing promise in catch block 
// final().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// final(); // for using only return in catch-block of final()



// Activity 2: use of async-await for multiple Promise

function promiseA() {
    return new Promise((resolve, reject) => {
        resolve(5);
    });
}

function square(number) {
    return new Promise((resolve, reject) => {
        resolve(number * number);
    });
}

// // using ONLY .then().catch() . it get mixed up
// promiseA().then(data => {
//     square(data).then(data => {
//         console.log(data);
//     }).catch(err => {
//         return err;
//     })
// }).catch(err => {
    
// })


// using async-await
async function solve() {
    try {
        const number = await promiseA();
        const number2 = await square(number);
        console.log(`square of ${number} is ${number2}`);
    } catch (error) {
        return Promise.reject(error);
    }
}


// solve();
// square of 5 is 25






// Activity 3: Asynchronous javascript - use of setTimeout
// taking example of making soup
// boil water 10 in
// chop carrots
// add carrots to water boil 5 min
// chop onion
// add onion and boil 5 min


// // Task 1: try the setTimeout and try racipe
// boilWater(10000);
// console.log('chop carrots');

// function boilWater(time) {
//     console.log('boiling...');
//     setTimeout(() => {
//         console.log('done boiling.');
//     }, time);
// }


// Task 2: about  callback hell - multiple callback inside other

boilWater();
console.log('chop carrot');


function boilWater() {
    console.log('boiling...');
    setTimeout(() => {
        console.log('done boiling.');
        console.log('add carrots');

        setTimeout(() => {
            console.log('carrots done.');
            console.log('add onion');

            setTimeout(() => {
                console.log('onion done');
            }, 5000);
        }, 5000);
        console.log('chop onion');
        
    }, 10000);
}
