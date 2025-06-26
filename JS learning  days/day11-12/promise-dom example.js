// alert("js connected");

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');
const container = document.querySelector('.image-container');

btn.addEventListener('click', () => { 
    addColor(heading1, 1000, 'red')
        .then(() => addColor(heading2, 2000, 'green'))
        .then(() => addColor(heading3, 3000, 'blue'))
        .catch((err)=>console.log(err));
});

// function to change color of text heading using promise

function addColor(element, time, color){
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time);
        } else {
            reject(new Error(`There is a no such elemet: ${element}`));
        }
    });
}