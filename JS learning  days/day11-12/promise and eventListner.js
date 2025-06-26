// alert("js connected");

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');
const container = document.querySelector('.image-container');
// url will refer to some random image from webs
const url = ' url for random image ';

btn.addEventListener('click', () => { 
    loadImage(url)
        .then((data => container.appendChild(data)))
        .catch((err) => console.log(err));
});

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.addEventListener('load', () => {
            resolve(img);
        });
        img.addEventListener('error', () => {
            reject(new Error(`Failed to load the image : ${url}`));
        });

        // we can place url reference anywhere and eventListner still listen to them.
        img.src = url;
    });
}