// tasks 1
console.log(" string to log value ");
// o/p : string to log value

// creating varibles
var fullName = "firstName lastName";
let age = 20;

console.log(fullName);
console.log(age);
// o/p: firstName lastName
// o/p: 20


//DATA TYPES 

// PRIMITIVE DATA TYPES
// #1 STRING - in b/w single/double quotes

let firstName = "G";
let lastName ='S';
console.log(`fullname is: ${firstName} ${lastName}`);
// o/p : fullname is: G S

// #2 NUMBER 
let age1 = 20;
console.log(age1);

// #3 BOOLEAN
let boolValue = true;
// console.log(boolValue); 
// it shows undefined
boolValue ? console.log("True") : console.log("False");

// #4 UNDERFINED 
let x
console.log(x);
// o/p: undefined

// #5 NULL
let y = null;
console.log(y);
// null

// NON-PRIMITIVE DATA TYPES
// #1 ARRAY 
let arr = [1 , 'a', 'string', 5.5];
console.log(` array elements are ${arr}`);
// o/p: array elements are 1,a,string,5.5

// #2 Object
let obj = {
    "name" : 'G',
    "age" : 20
};
console.log(`this is defined in object : name  ${obj.name}`);
// o/p : this is defined in oject : name G