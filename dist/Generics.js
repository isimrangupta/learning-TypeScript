function wrapingArray(item) {
    return [item];
}
wrapingArray("masala");
wrapingArray(42);
wrapingArray({ flavor: "Ginger" });
//_________________________________________
function pair(a, b) {
    return [a, b];
}
pair("masala", "test");
pair("masala", { flavor: "Ginger" });
const numberBox = { content: 10 };
const numberBoxCup = { content: "10" };
const res = {
    status: 200,
    data: { flavor: "masala" },
};
export {};
//# sourceMappingURL=Generics.js.map