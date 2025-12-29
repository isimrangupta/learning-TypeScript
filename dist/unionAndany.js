// UNION 
let subs = "1M";
//________________________________________
let apiRequest = 'pending';
apiRequest = "success";
//________________________________________
let airlineSeat = 'aisle';
airlineSeat = 'window';
//________________________________________
// ANY
const orders = ['12', '22', '28', '42'];
let currentorder;
for (let order of orders) {
    if (order === '28') {
        currentorder = order;
        break;
    }
    currentorder = '11';
}
console.log(currentorder);
export {};
//# sourceMappingURL=unionAndany.js.map