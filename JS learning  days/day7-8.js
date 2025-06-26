// Activity 1: built-in object - Math
// used for maths opertation in js

// let randomNumber = Math.random();
// console.log(randomNumber);
// // 0.6257475801618406 can be any nummber between 0-1

// console.log(Math.round(1.8)); //2
// console.log(Math.round(1.4)); //1
// console.log(Math.min(1,6,4,7,10)); //1
// console.log(Math.max(1, 6, 4, 7, 10)); //10

// // math.absolute it return +ve to -ve and vice versa
// console.log(Math.abs(1.8)); //1.8
// console.log(Math.abs(-40)); //40


// Activity2 : String as object
// Task 1:

// let lastName ='john';
// let firstName = new String('mark');


// typeof(firstName);
// 'object'

// typeof(lastName);
// 'string'

// lastName.length;
// 4

// lastName.trim();
// 'john'

// lastName[0];
// 'j'

// lastName.startsWith('Sa');
// false

// lastName.endsWith('hn');
// true

// lastName.toUpperCase();
// 'JOHN'

// lastName.replace('hn','helo');
// 'johelo'



// let message = 'this is first message';

// let words = message.split(' ');
// console.log(words);
// // [ 'this', 'is', 'first', 'message' ]

// Task 2: sting literal (``)
// let escapeSequence = ' this is second message with \'quote\' visible';
// console.log(escapeSequence);
// this is second message with 'quote' visible

// let literalText = `first line
// then second
// and last one without using escape sequence`;
// console.log(literalText);


// Activity  3: Array and its opertion

// let numbers = [3, 4, 6, 7, 9, 10, 23];
// console.log(numbers);

// task : insert element at end of array
// numbers.push(25);
// console.log(numbers);

// task : insert element in begin
// numbers.unshift(5);
// console.log(numbers);

// task : insert element in middle  using .splice(index, delete count, new elements);
// numbers.splice(2,0,8,'a');
// console.log(numbers);

// task : other operations
// console.log(numbers.includes(6)); // true
// console.log(numbers.indexOf(6, 3)); // -1

// array of object

// let courses = [
//     {no:1, fname:'firstName'},
//     {no:2, fname:'lastName'}
// ];

// let course = courses.find(function (course) {
//     return course.fname === 'firstName';
// });

// above function as arrow function

// let course = courses.find(course => course.fname === 'lastName');
// console.log(course);


// // Task to remove element from array
// let numbers = [3, 4, 6, 7, 9, 10, 23];
// // form end
// numbers.pop();
// // form start
// numbers.shift();
// // form middle
// numbers.slice(6, 2);

// console.log(numbers); // [ 4, 6, 7, 9, 10 ]



// Activity 4: combinig and slicing array

// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let combined = first.concat(second);
// console.log(combined); //[ 1, 2, 3, 4, 5, 6 ]

// let marks = [10, 20, 30, 40, 50, 60, 70, 80];
// let sliced = marks.slice(5); // [ 60, 70, 80 ]
// // let sliced = marks.slice(3, 6); // [ 40, 50, 60 ]
// console.log(sliced);


// Task : to concat array using spread operator
// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let combined2 = [...first, ...second];
// console.log(combined2);

// // to make a copy
// let copyOfCombined = [...combined2];
// console.log(combined2);



// Activity : loops on array

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];

// console.log(`using for-of loop`);
// for (let value of arr) {
//     console.log(value);
// }

// console.log(`using forEach loop`);
// arr.forEach(number => {
//     console.log(number);
// });

// Task to join elements of an array
// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let joined = arr.join();
// console.log(joined);
// // 10,20,30,40,50,60,70,80

// // task to seprate/split the elements from joined part
// let exampleString = 'this is example for split and join operations';
// let parts = exampleString.split(" ");
// console.log(parts);

// let reJoined = parts.join(',,');
// console.log(reJoined);

// Sorting in array with prmitive data types

// let arry = [50, 60, 80, 40, 10, 20, 70, 30];
// console.log(arry.sort());
// console.log(arry.reverse());

// Sorting in array with object types

// let arr = [
//     { id: 1, fname: 'firstName' },
//     { id: 2, fname: 'lastName' },
//     { id: 3, fname: 'nickName' }
// ];

// let arrSorted = arr.reverse(obj => obj.id);
// console.log(arrSorted);


// // Filter operation

// let numbers = [3, 5, 7, -4, 2, -5, -8];
// let filtered = numbers.filter(value => value <= 0);
// console.log(filtered);



// Mapping operation - used to map an element with some value

// let numbers = [40, 50, 60, 70];

// let mappedItems = numbers.map(function (value) {
//     return `student_no : ${value}`;
// });

// console.log(mappedItems);

// mapping with object 
let numbers = [-4, -5, 5, 6, 7];
let filtered = numbers.filter(value => value > 0);

let items = filtered.map(num => { value: num });
console.log(items);