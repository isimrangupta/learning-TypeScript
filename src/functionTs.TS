function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("masala chai", 2);

//_________________________________________

function getChaiPrice(): number {
  return 25;
}

//_________________________________________

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

//_________________________________________

function logChai(): void {
  console.log("chai is ready");
}

//_________________________________________

function orderChai1(type?: string) {}

//_________________________________________

function orderChai(type: string = "Masala") {}

//_________________________________________

function createChai(order: {
  type: string;
  suger: number;
  size: "small" | "large";
}): number {
  return 4;
}
