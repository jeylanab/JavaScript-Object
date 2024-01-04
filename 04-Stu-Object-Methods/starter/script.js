//WRITE YOUR CODE BELOW
// let menu = {
//     coffee: 3,
//     tea : 2,
//     latte: 3,
//     beer : 4
// };

// console.log(Object.keys(menu));

// let price = (Object.values(menu));

// let sum = 0;


// for (let i = 0 ; i < price.length; i++){
//     sum = sum +  price[i];

// }
// console.log("Sum = ", sum);




let Menu ={
    drinkName :["latte", "Ice coffee", "Tea", "Macciatto"],
    price: [3, 3.5 , 4, 2.5]

};

let totalPrice = 0;
let cost = (Object.values(Menu.price));

for (let i =0; i < cost.length; i++){
    totalPrice = totalPrice + cost[i];
}

console.log("Total Price is $",totalPrice);































