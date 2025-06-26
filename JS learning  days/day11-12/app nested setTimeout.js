// alert("js connected");

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log('you just clicked the button');

    // this is callback nesting- which is confusing
    // that resolverd in app2.js with other functionality
    setTimeout(() => {
        heading1.style.color = 'red';
        setTimeout(() => {
            heading2.style.color = 'red';
            setTimeout(() => {
                heading3.style.color = 'red';
            }, 1000);
        }, 2000);
    }, 1000);
});
