function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind}`;
}

//_____________________________________

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

//________________________________________

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size === "small") {
    return `samll cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `Make extra chai`;
  }

  return `chai order #${size}`;
}

//________________________________________

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class Cutting {
  serve() {
    return `Serving cutting Chai`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

//________________________________________

type ChaiOrder = {
  type: string;
  suger: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.suger === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.suger} suger!`;
  }
  return ` Serving custom chai: ${item}`;
}

//________________________________________

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order:Chai){
    switch(order.type){
        case "masala":
            return `Masala Chai`
            break
        case "ginger":
            return `Ginger Chai`
            break
        case "elaichi":
            return `Elaichi Chai`
            break
    }
}


function brew(order:MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }
}

//________________________________________


