class Deparment {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department", this.name);
    }
}
const accounting = new Deparment("Accounting");
accounting.describe();
const accountingCopy = {
    name: "vishal",
    describe: accounting.describe,
};
accountingCopy.describe();
console.log(accountingCopy);
export {};
