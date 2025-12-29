// class Chai {
//     flavour:string;
//     price:number;
//     constructor(flavour:string, price:number){
//         this.flavour = flavour
//         this.price = price
//     }
// }
// const masalaChai = new Chai("Ginger", 20)
// masalaChai.flavour = "adarak"
//________________________________________
class Chai {
    flavor = "Masala";
    secretIngredients = "Cardamon";
    reveal() {
        return this.secretIngredients; //OK
    }
}
class Shop {
    shopName = "Chai corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName; //OK
    }
}
//________________________________________
class Walet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Walet();
//________________________________________
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
//________________________________________
class ModernChai {
    _suger = 2;
    get suger() {
        return this._suger;
    }
    set suger(value) {
        if (value > 5)
            throw new Error("Too Sweet");
        this._suger = value;
    }
}
const c = new ModernChai();
c.suger = 3;
//________________________________________
class EkChai {
    flavour;
    static shopName = "ChaiCode caffee";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName);
//________________________________________
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Brewing chai");
    }
}
//________________________________________
class Heater {
    heat() { }
}
class ChaiMake {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
export {};
//# sourceMappingURL=oop.js.map