// Activity 1: functions declaration and its properties

// // function calling - above declaration and it perfor is action is due to hoisting
// run();

// // fn declaration
// function run(){
//     console.log('running');
// }

// // Function assignment OR named function assingment - assing a function to variable
// let stand = function walk() {
//     console.log('walking');
// };

// // using " walk(); " will work for this function assignment
// stand();

// // Anonymous function assignment
// let stand2 = function() {
//     console.log('walking far');
// };

// stand2();


// // Activity 2: Dynamic property of a function
// function sum(a, b) {
//     console.log(a + b);
// }

// sum(5, 6);
// sum(5); // NaN    not-a-number

// function sum(a, b) {
//     let total = 0;
    
//     // here extra parameters from function call goes to arguments object of js;
//     for (value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(5, 7, 8, 9)); // 29

// // Tast : Rest operator (...args)

// function sum(num, value, ...args) {
//     console.log(args);
// }
// sum(1, 2, 3, 4, 5, 6);
// // [ 3, 4, 5, 6 ]



// // Default Parameter
// function interest(p, r=7, y=10) {
//     return p * r * y / 100;
// }

// // console.log(interest(1000, 5, 10)); // 500
// console.log(interest(1000)); // 700


// // getter and setter function

// let person = {
//     fName: 'jack',
//     lName: 'sparrow',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         // this if part is used in try-catch block 
//         if (typeof value != Srting) {
//             throw new Error("the parameter is not a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// // console.log(person.fullName);
// // console.log(person.fullName ='will turner');

// try {
//     person.fullName = ture;
// }
// catch (e) {
//     console.log(e);
// }

// console.log(person.fullName);

// Activity 4: Scope of var and let

// {
//     // let a = 50;
//     // console.log(a); // works here
//     var a = 60;
// }

// // console.log(a); // not work in case of let but in var

// for (var i = 0; i <= 10; i++){
// }
// console.log(i); // work for var i but not for let

// to reducee an array 
let arr = [1, 2, 3, 4];
// let total = 0;

// for (let value of arr) {
//     total += value;
// }
// console.log(total);


let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);

// here accumulator act just like total varible in above example
// and currentValue is first value from array
// last 0 is give to it as initializing value for accumulator