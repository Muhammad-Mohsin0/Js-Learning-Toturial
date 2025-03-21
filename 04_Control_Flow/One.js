// if
// const isUserLoggedIn=true
// const temprature= 30

// if(temprature <=20){
//     console.log("Weather is cool");
// }else{
//     console.log("Weather is hot like summer");
// }

// <, >, <= , >=, !=, ==, ===
// +++++++++++++++++++++++++++
// const score = 200
// if(score > 100){
//     let power="fly"
// }
// console.log(`User Power :${power}`); //Block Scope

// const balance=800
// if (balance > 500) console.log("testing"); console.log("test"); //impilict but not recommded
// if (balance < 500){
//     console.log("Less then 500");
// }else if (balance < 750){
//         console.log("Less then 750");
// }else if (balance < 900){
//         console.log("Less then 900");
// }else {
//     console.log("Less then 1100");
// }

const userLoggedIn= true
const debitcard= true
const userLoggedInFromGoogle= false
const userLoggedInFromEmail= true

if(userLoggedIn && debitcard){ 
    console.log("Allow to buy the course");
}

if(userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log("User is Logged in");
}