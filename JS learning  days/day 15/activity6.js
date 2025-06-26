// Activity 6: Clauser property of function
// bundle of function - any variable declared in outer-function will be accesable from inner-function

function outerFunction() {
    let name = 'fullName';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

let a = outerFunction();
a(); // fullName

// Explanation:
// here a() is accessing the displayName function of outerFunction
// but how does the a() is able to access the name value
// even after ending of execution of outerFunction() was finnished earlier
// and variables are deleted outside there scope
// this is CLOSURE property - where functionality of innerFunction And
// data and parameter values are stored for later use


// note:
// nested functions => Closure => have REFRENCE to variable from outer function NOT value .

// each nested function will have a Closure of it