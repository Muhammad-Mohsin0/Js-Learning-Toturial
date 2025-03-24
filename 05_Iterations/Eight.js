// Reduce ()
const myNums=[1, 2, 3]

const myTotal=myNums.reduce(function (acc,currentVal){
    // console.log(`acc:${acc} and Currentvalue : ${currentVal}`);
    return acc+currentVal
})

// const myTotal=myNums.reduce((acc,currentVal)=>{
//     console.log(`acc:${acc} and currentVal: ${currentVal}`);
//     return acc + currentVal
// },0)
// console.log(myTotal);

const shopingCart= [
    {
        itemName:"Js Course",
        Price: 2999
    },
    {
        itemName:"Py Course",
        Price: 1999
    },
    {
        itemName:"Ruby Course",
        Price: 3599
    },
]
const priceToPay= shopingCart.reduce((acc,item)=>acc + item.Price,0)
console.log(priceToPay);
