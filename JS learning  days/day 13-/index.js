// Activity 1: add and remove eventListner to an element

// function eventFunction() {
//     console.log('you clicked on the document');
// }

// // to listen for any click on screen with eventListner
// document.addEventListener('click', eventFunction);

// // to remove the eventListner from document
// // this works instantly and we may not see anything in console -- so commented
// document.removeEventListener('click', eventFunction);





// Activity 2: to cosole log the event what are its prroperties
// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function (event) {

//     // this is to see what is happening inside event and its properties
//     console.log(event);
// })

// const links = document.querySelectorAll('a');
// const thirdLink = links[2];
// thirdLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('default action prevented');
// })





// Activity 3: creating new element with loop and a adding eventlisten to:
// firstly individualy and then
// on parent div to reduce resource for obj for each element

// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('you clilcked on para and '+ event.target.textContent);
// }

// myDiv.addEventListener('click', paraStatus);

// for (let i = 1; i <= 20; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is a new para ' + i;
    
//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);




// Activity 4: to use method nodeName for selecting/filer for specific element

const paraElement = document.querySelector('.activity3');
paraElement.addEventListener('click', function (event) {
    if (event.target.nodeName === 'SPAN') {
        
        console.log('you clicked on '+ event.target.textContent);
    }
})