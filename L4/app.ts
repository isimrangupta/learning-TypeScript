// ! Function return type

// EXAMPLE 1

function add(num1: number, num2: number): number {
  return num1 + num2; // return 30
}
console.log(add(10, 20));

// EXAMPLE 2

function greet(name: string): void {
  console.log(`Hi, ${name}`); // Nothing to return
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

let combineFunction: (a: number, b: number) => number;
combineFunction = add;
console.log(combineFunction(100, 300));







// ! Function Type & callback

// function addHandle(num1: number, num2: number, cb: (n: number) => void) {
//   const result = num1 + num2;
//   cb(result);
// }

// addHandle(10, 20, (result:number) => {
//     console.log(result)
// })



               // OR
               

type CB =(n: number) => void;
function addHandle(num1: number, num2: number, cb:CB) {
  const result = num1 + num2;
  cb(result);
}

addHandle(10, 20, (result:number) => {
    console.log(result)
})
