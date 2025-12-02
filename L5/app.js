// let  userInput : unknown;
var userInput;
var userName;
userInput = 10;
userInput = "simran";
// userName = userInput
if (typeof userInput === "string") {
    userName = userInput;
}
// ! Naver return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Inter server error", 500);
console.log(res);
