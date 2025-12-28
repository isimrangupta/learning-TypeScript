type ChaiOrder = {
  type: string;
  suger: number;
  strong: boolean;
};

function MakeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

//______________________________________

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

//________________________________________

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

//________________________________________

// type Response = {ok:true} | {ok:false}

// class myRes implements Response {
//     ok:boolean = true
// }

//________________________________________

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

//________________________________________

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai2 = BaseChai & Extra;

const cup: MasalaChai2 = {
  teaLeaves: 2,
  masala: 1,
};

//________________________________________

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "hitesh" };
const u2: User = { username: "hitesh", bio: "hitesh.ai" };


//________________________________________

type Config = {
    readonly appName:string
    version:number
}

const cfg:Config = {
    appName:"MasalaJi",
    version:1
}

// cfg.appName = "chaiorder"   //Error