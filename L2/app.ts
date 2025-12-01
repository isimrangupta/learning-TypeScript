// Object, Array, Tuple, Enum

// !OBJECT:-

// const person1: {
//   firstName: string;
//   age: number;
//   user:{
//     adress: string;
//   }
// } = {
//   firstName: "Vishal",
//   age: 25,
//   user:{
//     adress:"Matigara"
//   }
// };



// !ARRAY:-

const person1: {
  firstName: string;
  age: number;
  skills: string[];
} = {
  firstName: "Diksha",
  age: 25,
  skills: ["React.js", "TypeScript"],
};

let favouriteLanguage1: string[];
favouriteLanguage1 = ["Hindi", "English"];
favouriteLanguage1[1] = "Bangali";
console.log(favouriteLanguage1);

let favouriteLanguage2: any[]; //you should avoid use any
favouriteLanguage2 = ["Hindi", "English", true];
console.log(favouriteLanguage2);




// !TUPLE :-

const Person2: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string]; // fixed array of two types 0 -> number  , 1 -> string
} = {
  name: "Vishal",
  age: 25,
  skills: ["JavaScript", "Next.JS"],
  product: [10, "Mackbook M2"],
};

// Person2.product[1] = 20;    //Invalid
// Person2.product = [[10, "Mackbook M2", "Macbook Air M2"]





// !Enum :-

enum Role {ADMIN, AUTHOR, Read_user_only};

const Person3 = {
   name: "Simi",
  age: 25,
  skills: ["JavaScript", "Next.JS"],
  product: [10, "Mackbook M2"],
  role: Role.ADMIN,
}

if(Person3.role === Role.AUTHOR){
console.log("Author")
} else if(Person3.role === Role.ADMIN){
console.log("Admin")
} else if(Person3.role === Role.Read_user_only){
console.log("read user only")
}
