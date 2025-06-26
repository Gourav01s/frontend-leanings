// Activity 1: Function Declaration
// Task 1: write a function to check if a number
// is even or odd and log the result ;

function oddOrEven(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is oddn`);
    }
}

oddOrEven(47); // 47 is odd

// Task 2: write a function to calculate the square
// of a number and return the result;

function squareOfNumber(num) {
    console.log(`Square of ${num} is :${num ** 2}`);
}

squareOfNumber(20); // Square of 20 is :400

// Activity 2: Function Expression
// Task: write a function expression to find the
// maximum of two numbers and log result;

function findMax(num1, num2) {
    let max = Math.max(num1, num2);
    console.log(`maximun number is :${max}`);
}
findMax(543, 674); // maximum number is :674

// Task : function to concatinate two strings 
let person1 = "firstname";
let person2 = "lastname";
console.log(`after concatination ${person1 } ${person2}`);

// Activity 3: Arrow functions
// Task: write a function to calculate the sum
// of two numbers and give results

const sumOfNumber = (num1, num2) => {
    return num1 + num2;
};
console.log(`sum of numbers is : ${sumOfNumber(6, 7)}`);
// sum of numbers is : 13

// Task : Write an arrow function to check if a string contains a
// specific character and return a boolean value.

const hasSpecificChar = (str, char) => {
    return str.includes(char);
};

console.log(`check if string has a spacific char (true/false): 
    ${hasSpecificChar("lkasfl", "s")}`);

// Task : Write a higher-order function that takes two functins and a value,
// applies the first function that many times.
   
const applyFunctionNTimes = (func1, func2, value, time) => {
    let result = value;
    for (let i = 0; i < time; i++){
        result = func1(result);
    }
    return func2(result);
}

const increment = (x) => x + 1;
const double = (x) => x * 2;

console.log(" higher order function to pass two function , value and time to run func n times:",
    applyFunctionNTimes(increment, double, 5, 3)
);

//  higher order function to pass two function , value and time to run func n times: 16