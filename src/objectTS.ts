const chai = {
  name: "masala chai",
  price: 20,
  isHot: true,
};

// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

//________________________________________

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Chai",
  price: 20,
  isHot: true,
};

//________________________________________

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakhai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves"],
};

//________________________________________

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;

//________________________________________

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arbica" };
const chaiBrew: Brew = coffee;

//________________________________________

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chaicode",
  password: "123",
};

//________________________________________

type Item = { name: string; quantity: number };
type Adress = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  adress: Adress;
};

//________________________________________

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with", updates);
};

updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});

//________________________________________

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Masala Chai",
  quantity: 2,
});

//________________________________________

type Chai2 = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chai2, "name" | "price">;

const ChaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 20,
};

//________________________________________

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type PublicChai = Omit<Chai, "secretIngredients">;
