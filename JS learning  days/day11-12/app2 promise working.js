// alert("js connected");

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => { });

const promiseA = new Promise((resolve, reject) => {
    let value = false;
    if (value) {
        resolve('the value is true');
    } else {
        reject('there is an error, value set to false');
    }
});

// console.log(promiseA);

promiseA
    .then((data) => {
    console.log(data); //the value is true
}).catch(err => {
    console.log(err); // there is an error, value set to false
});