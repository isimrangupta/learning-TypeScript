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
var person1 = {
    firstName: "Diksha",
    age: 25,
    skills: ["React.js", "TypeScript"],
};
var favouriteLanguage1;
favouriteLanguage1 = ["Hindi", "English"];
favouriteLanguage1[1] = "Bangali";
console.log(favouriteLanguage1);
var favouriteLanguage2; //you should avoid use any
favouriteLanguage2 = ["Hindi", "English", true];
console.log(favouriteLanguage2);
// !TUPLE :-
var Person2 = {
    name: "Vishal",
    age: 25,
    skills: ["JavaScript", "Next.JS"],
    product: [10, "Mackbook M2"],
};
// Person2.product[1] = 20;    //Invalid
// Person2.product = [[10, "Mackbook M2", "Macbook Air M2"]
// !Enum :-
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["Read_user_only"] = 2] = "Read_user_only";
})(Role || (Role = {}));
;
var Person3 = {
    name: "Simi",
    age: 25,
    skills: ["JavaScript", "Next.JS"],
    product: [10, "Mackbook M2"],
    role: Role.ADMIN,
};
if (Person3.role === Role.AUTHOR) {
    console.log("Author");
}
else if (Person3.role === Role.ADMIN) {
    console.log("Admin");
}
else if (Person3.role === Role.Read_user_only) {
    console.log("read user only");
}
