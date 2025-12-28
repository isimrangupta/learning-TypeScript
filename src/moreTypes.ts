let response: any = "42";

//________________________________________

let numericlenth: number = (response as string).length;

//________________________________________

type Book = {
  name: string;
};

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);

//________________________________________

const inputElement = document.getElementById("username") as HTMLInputElement;

//________________________________________

let value: any;

value = "chai";
value = [1, 2, 3, 4];
value = 2.5;
value.toUpperCase();

//________________________________________

let Newvalue: unknown;

Newvalue = "chai";
Newvalue = [1, 2, 3, 4];
Newvalue = 2.5;
if (typeof Newvalue === "string") {
  Newvalue.toUpperCase();
}

//________________________________________

// try catch block

try {
  //
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

//________________________________________

const data: unknown = "chai aur code";
const strData: string = data as string;

//________________________________________

type Role = "admin" | "user";
function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role;
}


//________________________________________

function neverReturn():never{
    while(true){}
}