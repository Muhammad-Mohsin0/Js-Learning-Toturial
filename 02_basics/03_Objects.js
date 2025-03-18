// Singleton , if object create by constructor then its singleton 
//object.create               //constructor


// If object created by litrels then NOT SINGLETON
// Object Litrals

const mySym= Symbol("key1")
const jsUser= {
    name:"Mohsin",
    "full name" : "Mohsin Khan",
    [mySym]: "mykey1",
    age: 18,
    email: "mosi@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(typeof jsUser.email);
console.log(typeof jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email="mohsina@pak.com"
// Object.freeze(jsUser)
jsUser.email="mosiiii@ipad.com"
// console.log(jsUser);

// jsUser.greeting=function(){
//     console.log("Helo Js User");
// }
// jsUser.greetingTwo=function(){
//     console.log(`Helo Js User,${this.name}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
