// if-else
let aNumber = 10;
if (aNumber < 10) {
    console.log("Number is less then 10");
} else if( aNumber > 10) {
    console.log("Number is greater then 10");
}
else {
    console.log("Number is equal to 10");
}


// Switch-Case statements 
let weeknumber = 4;
switch (weeknumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("invalid");
        
}

//For loop
console.log("For Loop");
let num1 = 20;
for (let i = 0; i <= num1; i++){
    console.log(`${i} * ${i} = ${i * i}`);
    if (i % 10 == 0)
        console.log("\n");
}

// while loop
console.log("While Loop");
let i = 10;
while (i > 0) {
    console.log(`${5 * i}`);
    i--;
}
// oputput 50 to 0 with gap of 5 digit

// Do-while loop
console.log("Do-While-Loop");

let it = 10;
do {
    console.log(`${5 * it}`);
    i--;
} while (it > 10);
// o/p = 50 , this because
// do-while loop execute of atlest one time



// Activity 4: Conditional Ternary Operator
// Task 6: Write a program that uses the ternary
//  operator to check if a number is even or odd and
//  log the result to the console.
const number = 15;

number % 2 == 0
    ? console.log(`${number} is even number`)
    : console.log(`${number} is a odd number`);
// 15 is a odd number

// Activity 5: Combining Condition
// Task 7: Write a program to check if a year is a leap year
// using multiple condition
// (divisible by 4, but not 100 unless also divisible by 400)

const year = 2025;
if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {
    console.logg(`${year} is not a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}
// 2025 is not a leap year -- o/p

// Activity 1: IF-Else Statements
// Write a program to check if a number is positive,
//  negative, or zero, and log the result to the console.
const num = 10;
if (num < 0) {
  console.log(`${num} is negative`);
} else if (num > 0) {
  console.log(`${num} is positive`);
} else {
  console.log(`${num} is a zero`);
}

//  10 is positive -- o/p