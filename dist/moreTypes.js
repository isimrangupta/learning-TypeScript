let response = "42";
//________________________________________
let numericlenth = response.length;
let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
//________________________________________
const inputElement = document.getElementById("username");
//________________________________________
let value;
value = "chai";
value = [1, 2, 3, 4];
value = 2.5;
value.toUpperCase();
//________________________________________
let Newvalue;
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
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
//________________________________________
const data = "chai aur code";
const strData = data;
function redirectBasedOnRole(role) {
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
function neverReturn() {
    while (true) { }
}
export {};
//# sourceMappingURL=moreTypes.js.map