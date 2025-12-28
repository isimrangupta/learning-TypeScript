interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavor: "masala",
  price: 20,
};

//_________________________________________

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "chaicode caffe",
};

//_________________________________________

interface DiscountClaculator {
  (price: number): number;
}

const apply50: DiscountClaculator = (p) => p * 0.5;

//_________________________________________

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

//_________________________________________

interface ChaiRating {
    [falvor:string]:number
}

const ratings:ChaiRating = {
    masala:4.5,
    ginger:5.5,
}

//_________________________________________

interface User {
    name:string;
}

interface User {
    age:number
}

const u : User = {
    name: "Hitesh",
    age:20
}

//_________________________________________

interface A {
    a:string
}

interface B {
    b:string
}

interface C extends A, B {}

//_________________________________________


