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
  public flavor: string = "Masala";
  private secretIngredients = "Cardamon";

  reveal() {
    return this.secretIngredients; //OK
  }
}

class Shop {
  protected shopName = "Chai corner";
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
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

//________________________________________

class ModernChai {
  private _suger = 2;

  get suger() {
    return this._suger;
  }

  set suger(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._suger = value;
  }
}

const c = new ModernChai();
c.suger = 3;

//________________________________________

class EkChai {
  static shopName = "ChaiCode caffee";

  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

//________________________________________

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make(): void {
    console.log("Brewing chai");
  }
}

//________________________________________

class Heater {
  heat() {}
}

class ChaiMake {
  constructor(private heater: Heater) {}
  
  make() {
    this.heater.heat;
  }
}
