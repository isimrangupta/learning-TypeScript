// ! Unknown :-

// let  userInput : unknown;
let userInput: any;
let userName: string;

userInput = 10;
userInput = "simran";

// userName = userInput
if (typeof userInput === "string") {
  userName = userInput;
}



// ! Naver return type :-

function generateError(message: string, code: number): never{
  throw { message: message, statusCode: code };
}
const res = generateError("Inter server error", 500);
console.log(res)
