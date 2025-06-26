// alert("js connected");

// async-await
// async function functionName() {
//     await
// }
// const otherFunction = async () => {
//     await
// }


const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');
const container = document.querySelector('.image-container');

btn.addEventListener('click', async() => { 
    displayColor().then((data)=> console.log(data));
});

// this function declaration is not must to use but all inside it can be 
// can be writen in above async arrow function also
async function displayColor() {
    try {
        const first = await addColor(heading1, 1000, 'red');
        await addColor(heading2, 1000, 'green');
        await addColor(heading3, 1000, 'blue');
        console.log(first);
        
    } catch (error) {
        console.log(error);
    }

    return 'hello';
}

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