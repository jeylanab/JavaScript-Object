//WRITE YOUR CODE BELOW
//  let customerOrder = {
//     drink: "coffee" , 
//     sugarAmount: 2,
//     orderReady : false

//  };

//  if( customerOrder.orderReady){
//     console.log("Ready for pick-up");
//  }
//  else {
//     console.log("Still in order queue");

//  }


 let customerOrder = {
    Name:"Coffee",
    sugarAmount: 0,
    orderReady: true
 };

 for (let key in customerOrder){
   console.log( key , ":", customerOrder[key]);
 }

 if (customerOrder.orderReady == true){
   console.log("Ready for pick-up")
 }
 else {
   console.log("Still in order queue");
 }
