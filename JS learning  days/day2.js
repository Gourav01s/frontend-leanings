// #1 - Arithemetic Operator 
// + - / * % ++ -- 

let num1 = 10;
let num2 = 20;

console.log(`addition ${num1 + num2}`);
console.log(`substraction ${num1 - num2}`);
console.log(`multplication ${num1 * num2}`);
console.log(`division ${num1 / num2}`);
console.log(`modulus or remainder ${num1 % num2}`);
// OR
console.log("addition", num1+num2);

// PRE/POST INCREMENT / DECERMENT

console.log(" num1++ + ++num2", num1++ + ++num2);
// 10 21 31
console.log(" ++num1 + num2++", ++num1 + num2++);
// 12 21 33
console.log(" num1-- + num2--", num1-- + num2--);
// 12 22 34
console.log(" num1-- + --num2", num1-- - --num2);
// 11 20 -9
console.log(" ++num1 - --num2 ", ++num1 - --num2);
// 12 19 -7

// #2 assignment operator
// = += -= *= /= %=

console.log("assignment operator");
let b = 10;
console.log(b); //10
b+=b;
console.log(b); //20
b-=2;
console.log(b); //18
b*=3;
console.log(b); //54
b/=2;
console.log(b); //27
b%=5;
console.log(b); //2

// #3 comparison operator
// == === != !== < > <= >=

console.log("comparison operator");
let n1 = 5;
let n2 = '5';

console.log(n1 == n2); //true
console.log(n1 === n2); // false
console.log(n1 != n2); // false
console.log(n1 !== n2); // true
console.log(n1 >= n2); // true
console.log(n1 <= n2); // true
console.log(n1 < n2);  // false
console.log(n1 > n2); // false

// #4 Bitwise Operators
// & | ^ ~ << >> >>> 

console.log("Bitwise Operators");
let bot = 10;

console.log(bot & 3); // 2
console.log(bot | 3); // 11
console.log(bot ^ 3); // 9
console.log(~bot); //-11 
console.log(bot >> 3); // 1
console.log(bot << 3); //80

// #5 Logical Operator 
// && || ! 
let lo1 = true; 
let lo2 = false;

console.log(lo1 && lo2); // false
console.log(lo1 || lo2); // true
console.log(!lo1); //false
console.log(!lo2); //true

// #6 Turnary Operator 
let age = 18;
age > 18 ? console.log("You can Vote"): console.log("You can not vote");