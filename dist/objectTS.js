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
let tea;
tea = {
    name: "Ginger Chai",
    price: 20,
    isHot: true,
};
const adrakhai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"],
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arbica" };
const chaiBrew = coffee;
const u = {
    username: "chaicode",
    password: "123",
};
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala Chai",
    quantity: 2,
});
const ChaiInfo = {
    name: "Lemon Tea",
    price: 20,
};
export {};
//# sourceMappingURL=objectTS.js.map