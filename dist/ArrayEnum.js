const chsiFlavours = ["Masala", "Adrak"];
const chaiPrice = [10, 20];
// or
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
];
//_________________________________________
const cites = ["Delhi", "Jaipur"];
// cites.push("pune")   // Error
//_________________________________________
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
//_________________________________________
let chaiTuple;
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Masala"]   //Error
//_________________________________________
let userInfo;
userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];
//_________________________________________
const location = [28.66, 32.22];
//_________________________________________
const chaiItem = ["Masala", 25];
//_________________________________________
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.LARGE;
//_________________________________________
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED";
})(Status || (Status = {}));
//_________________________________________
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER);
//_________________________________________
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "chai";
})(RandomEnum || (RandomEnum = {}));
//_________________________________________
var Sugers;
(function (Sugers) {
    Sugers[Sugers["LOW"] = 1] = "LOW";
    Sugers[Sugers["MEDIUM"] = 2] = "MEDIUM";
    Sugers[Sugers["HIGHT"] = 3] = "HIGHT";
})(Sugers || (Sugers = {}));
//_________________________________________
let t = ["chai", 10];
t.push("extra");
export {};
//# sourceMappingURL=ArrayEnum.js.map