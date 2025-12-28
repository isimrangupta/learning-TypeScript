function wrapingArray<T>(item: T): T[] {
  return [item];
}

wrapingArray("masala");
wrapingArray(42);
wrapingArray({ flavor: "Ginger" });

//_________________________________________

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
pair("masala", "test");
pair("masala", { flavor: "Ginger" });

//_________________________________________

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 10 };
const numberBoxCup: Box<string> = { content: "10" };

//_________________________________________

interface ApiPromis<T> {
  status: number;
  data: T;
}

const res: ApiPromis<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
