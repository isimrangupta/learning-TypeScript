const chsiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

// or

const rating: Array<number> = [4.5, 5.0];

//_________________________________________

type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adrak", price: 25 },
];

//_________________________________________

const cites: readonly string[] = ["Delhi", "Jaipur"];
// cites.push("pune")   // Error

//_________________________________________

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//_________________________________________

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Masala"]   //Error

//_________________________________________

let userInfo: [string, number, boolean?];
userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];

//_________________________________________

const location: readonly [number, number] = [28.66, 32.22];

//_________________________________________

const chaiItem: [name: string, price: number] = ["Masala", 25];

//_________________________________________

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

//_________________________________________

enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

//_________________________________________

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);

//_________________________________________

enum RandomEnum {
  ID = 1,
  NAME = "chai",
}

//_________________________________________

const enum Sugers {
    LOW = 1,
    MEDIUM =2,
    HIGHT = 3
}

//_________________________________________

let t : [string, number] = ["chai", 10 ]
t.push("extra")
