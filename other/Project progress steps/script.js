// alert('script is connected and active');

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// adding event listners to next and prev button 

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }

    update();
});

// functon for further functionality

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })

    // to count for how many circles have class 'active'

    const activesteps = document.querySelectorAll('.active');

    // to calculate and change the width of progress bar and fill it with the color

    progress.style.width = ((activesteps.length -1)/(circles.length -1)*100) + '%';

    // conditional statement to check if progress is in middle or at end of line

    if(currentActive === 1){
        prev.disabled = true;
    }
    else if (currentActive == circles.length){
        next.disabled = true;
    }
    else {
        next.disabled = false;
        prev.disabled = false;
    }
}