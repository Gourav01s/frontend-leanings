// Activity 1 : For Loop
// Task 1: Write a program to print numbers 
// from 1 to 10 using a for loop.

for (let i = 0; i <= 10; i++){
    console.log(`number is a : ${i}`);
}

// Task 2: Write a program to print
// multiplication table of 5 using a for loop.

for (let i = 0; i <= 10; i++){
    console.log(`Table of 5 is a :${i * 5}`);
}

// Activity 2 : while-loop
// Task 3: write a program to calculate the sum
// of numbers from 1 to 10 using a while loop.

let i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    console.log(`sum of number ${i} is: ${sum}`);
    i++;
}
 
// Activity 3 : Do-while loop
// Task 4: write a program to print numbers 
// from 1-5 using a do-while loop;

let x = 1;
do {
    console.log(`Number is : ${x}`);
    x++;
} while (x <= 5);

// Task 5 : write a program to calculate the factorial
// of a number using a do-while loop.

let num = 5;
let fact = 1;
let y = 1;
do {
    fact *= y;
    console.log(`factorial of ${num} is : ${fact}`);
    y++;
} while (y <= num);

// Activity 4: Nested Loops
// Task 6: Write a program to print a pattern
// using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = "";
for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= i; j++){
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);

// Activity 4: loop control statements
// Task 7:  write a program to print numbers form
// 1-10 but skip number 5 using continue statement;

for (let i = 1; i <= 10; i++){
    if (i === 5) {
        continue;
    }
    console.log(`number is :${i}`);
}

// number is :1
// number is :2
// number is :3
// number is :4
// number is :6
// number is :7
// number is :8
// number is :9
// number is :10

// Task 9: Write a program to print numbers
// from 1 to 10, but stop loop when
// the number is 7 using the break statement.

for (let i = 0; i <= 10; i++){
    if (i === 8) {
        break;
    }
    console.log(`number is a: ${i}`);
}