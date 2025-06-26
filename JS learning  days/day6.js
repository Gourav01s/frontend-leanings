// Activity 1: object creation

let rectangle = {
    length: 10,
    bradth: 5,

    // method crating
    draw: function() {
        console.log(" litral function");
    },
    // OR this way

    mark() {
        console.log("markiing");
    }
    
};

console.log(rectangle.draw());

// Factory Function: which produce function on return

function createRectangle(length, bredth) {
    return rectangle = {
    length: length,
    bredth: bredth,

    // method crating
    draw() {
        console.log(" litral function");
    },

    mark() {
        console.log("markiing");
    }
    
    };
}

let rectangleObj01 = createRectangle(8, 7); // first Obj created
console.log(rectangleObj01);
let rectangleObj02 = createRectangle(10, 8); // second Obj created


// Activity 2: Constructor function

function Rectangle( lenght, bredth) {
    this.lenght = lenght;
    this.bredth = bredth;
    this.draw = function(){
        console.log(" draw fn from constructor function");
    }
}
 
// object for constructor function
let rectangleObject = new Rectangle(7,6);
console.log(rectangleObject);

// Rectangle { lenght: 7, bredth: 6, draw: [Function (anonymous)] }

// Task : Dynamic nature of object
// i.e we can add and delete properties to object

rectangleObject.color = 'white';
console.log(rectangleObject);

// to delete coor property
delete rectangleObject.color;
console.log(rectangleObject);


// Activity 3: how function are created in js
// or can say parent of any function
// this is how the previous constructor function of Rectangle is working behind the scene
let Rectangle1 = new Function (
    'length', 'bredth',
    `this.length = length;
    this.bredth = bredth;
    this.draw = function() {
     consolole.log('drawing ');
 }`)

// object creating
let rect = new Rectangle1(8, 7);
console.log(rect);



// Activity 4: types - Primitive types and Refrence types(objects)
// Primitive - number, string, boolean, undef, null
// Refrence - function, object, array

// Task 1:
// let a = 10;
// let b = a;
// a++;
// console.log(a); // 11
// console.log(b); // 10

// task 2:
let x = { value: 10 };
let y = x;
x.value++;

console.log(x.value); //11
console.log(y.value); //11

// Task 3:
// let a = 10;
// function increment(a) {
//     a++;
//     // value of a is incremented ony for scop of this function;
// }
// increment(a);
// console.log(a); //10

// Task 4:
let a = { value: 10 };
function increment(a){
    a.value++;
    // here the address of a is passed and value is incremented for actual value 
}
increment(a);
console.log(a); // 11


// Activity 5: panding loops : for-in, for-of

let rectangleForLoops = {
    length: 6,
    bredth: 5
};

// for-in loop -- applicable on objects
for (let key in rectangleForLoops) {
    // key for key list
    // values are reflected by rectanglrForLoop[key]
    console.log(key, rectangleForLoops[key]);
}

// for-of loop -- applicable for non-objects
for (let key of Object.entries(rectangleForLoops)) {
    console.log(key);
}



// Activity 5: OBJECT CLONING
// types : iteration, Assign, Spread

// object cloning #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest= { };

// for (let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest); //{ a: 10, b: 20, c: 30 }
// src.a++;
// console.log(dest); //{ a: 10, b: 20, c: 30 }
// both r same so object are diff and not passing address to other

// object cloning #2 -- using assign
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = Object.assign({}, src);
// console.log(dest);

// object cloning #2 -- using spread (...)
let src = {
    a: 10,
    b: 20,
    c: 30
};

let dest = { ...src };
console.log(dest); // { a: 10, b: 20, c: 30 }
