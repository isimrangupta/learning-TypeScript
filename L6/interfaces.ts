// ! Interface

// interface Person {
//     name:string;
//     age:number;
//     isPass: boolean;
//     greet(text:string):void
// }

// let user : Person;

// user = {
//     name:"Vishal",
//     age:24,
//     isPass:true,
//     greet(text) :void{
//         console.log(`${text} ${this.name}`);
//     }
// }

// console.log(user);

// user.greet("Hi there, I am")

//________________________________________________

// interface Greetable {
//     name:string;
//     greet(text:string):void;
// }

// class Person implements Greetable{
//     name: string;
//     constructor(n:string){
//         this.name =n;
//     }
//     greet(text: string): void {
//         console.log(`${text}, ${this.name}`);

//     }
// }

// const p1 = new Person("Aman");
// p1.greet("Hi there, I am")

//_______________________________________________________

// ! readonly

// interface Greetable {
//   readonly name: string;
//   greet(text: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(text: string): void {
//     console.log(`${text}, ${this.name}`);
//   }
// }

// let user1: Greetable;
// user1 = new Person("Patel");
// console.log(user1);
// user1.name = "Raj";  // Error

//________________________________________________

//! Extending Interface

// interface Named {
//   readonly name: string;
// }

// interface Greetable extends Named {
//   greet(text: string): void;
// }

// class Person implements Greetable {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(text: string): void {
//     console.log(`${text}, ${this.name}`);
//   }
// }

// let user1: Greetable;
// user1 = new Person("Patel");
// console.log(user1);




//______________________________________________



// type addFun = (a:number, b:number) => number;
              // or
// interface addFun {
//   (a: number, b: number): number;
// }

// let add: addFun;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// console.log(add(10,20));


//___________________________________________________

//! optional (?)

interface Named {
    readonly name:string;
    outputName ? : string;
}

class Person implements Named{
    name: string;
    constructor(n:string){
        this.name = n
    }
}