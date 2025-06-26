// alert('script is active now ');

// create array of all divs with panel class
 
var panels = document.querySelectorAll('.panel');

// to add class active to clicked image

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
});

// to remove the active class from all panels 

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}