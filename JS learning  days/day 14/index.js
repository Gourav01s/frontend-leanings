// Activity 1: to calculate performance at particular point
// adding 100 para

// const t1 = performance.now();
// for (let i = 1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is new para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log('this took ' + (t2 - t1) + ' ms');

// optimizing above code

// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for (let i = 1; i <= 100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'this is para ' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log('this took ' + (t4 - t3) + ' ms'); // 1.7 ms or somthing

// note: this time of execution depends on two factors --- 1.Reflow(calc all maths for element for repaint) and 2.Repaint(show element on screen)
// keep it as low as much possible


// Activity 2: call stack -- what it is and how it works
// JS execute code synchronusly (line by) and it put the executing element top of stack and execute it
// if it is fn then find its internal working and load it to call stack
// after execution of top element it is cleared from to


// Activity 3: Event Loop -
// it is using the call stack for working
// when ther is async code/ method on call-stack it is passed to browser and cleard from call stack
// then , call-stack continue to work
// then, browser add that async-fn to queue
// queue will wait till call-stack is empty ,then pass fn to call-stack for execution

// Activity 4: setTimeout working
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"

// passing this mymethod to setTimeout 
// setTimeout(myArray.myMethod,1000); // prints object-propreties

// solution is using wrapper function
setTimeout(function () {
    myArray.myMethod();
  }, 2000); // prints "zero,one,two" 
  setTimeout(function () {
    myArray.myMethod("1");
  }, 2500); // prints "one" 