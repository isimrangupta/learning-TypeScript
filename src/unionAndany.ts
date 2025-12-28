// UNION 

let subs: number | string = "1M"

//________________________________________

let apiRequest: 'pending' | 'success' | 'error'  = 'pending'

apiRequest = "success"

//________________________________________

let airlineSeat : 'aisle' | 'window' | 'middle' = 'aisle'

airlineSeat = 'window'


//________________________________________


// ANY

const orders = ['12', '22', '28', '42']

let currentorder: string | undefined;

for(let order of orders){
    if(order === '28'){
        currentorder = order
        break
    }
    currentorder = '11'
}

console.log(currentorder);

