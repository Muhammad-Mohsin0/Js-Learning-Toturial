const userEmail=[]
if (userEmail){
    console.log("Got a user Email");
}else {
    console.log("Don't have a user Email");
}
// Truthy values
//  "0", 'false', " ", [], {}, function(){}, 
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

if(userEmail.length === 0){
    console.log("Array is empty");
}
const objEmpty={}
if(Object.keys(objEmpty).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1= 5 ??10
// val1= null ?? 10
// val1= undefined ?? 15
val1= null ?? 15 ??20

console.log(val1);

// Ternary Operator
// condition ? true : false
const teaPrice= 70
teaPrice >= 80 ? console.log("higher price") : console.log("lower price");


