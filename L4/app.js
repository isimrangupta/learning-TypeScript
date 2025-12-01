// ! Function return type
// EXAMPLE 1
function add(num1, num2) {
    return num1 + num2; // return 30
}
console.log(add(10, 20));
// EXAMPLE 2
function greet(name) {
    console.log("Hi, ".concat(name)); // Nothing to return
}
greet("simi");
// EXAMPLE 3
//let combineFunction : Function;    //Don't use it
// combineFunction = 10;                //Invalid
// combineFunction = function(){};      // Valid
// combineFunction = add;               //Valid
// combineFunction = greet;              //Valid
// combineFunction = add;
// console.log(combineFunction(1,2))     // 3
// Good Practice
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 300));
// ! Function Type & callback
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
