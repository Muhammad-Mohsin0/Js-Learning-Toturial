// # Primitive DataTypes

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score =100
const scoreValue=100.3

const isLoggedIn=false
const outSideTemp =null

let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id === anotherId);

// const bigNumber= 43543252525235353n  

// Reference (Non-Primitive DataTypes)

// Array, Objects, Functions

const heros = ["Imran khan", "Qaud","Iqbal"]
let myObj = {
    name:"mosi",
    age: 25,
}

const myFunction= function(){
    console.log("Helloo World")
}

// console.log(typeof bigNumber);



// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++
// Memory ( Stack and Heap)

// Stack (Primitive) , Heap (Non-Primitive)

//Stack,  make a copy nd not change the exact value
let myName= "Mohsin"
let fullName=myName
fullName="Muhammad Mohsin"
console.log(myName);
console.log(fullName);

// Heap , Make reference and change exact value

let userOne ={
    email: "mosi@google.com",
    Address: "islamabad"
}
let userTwo=userOne

userTwo.email="mosiKhan@yahoo.com"
console.log(userOne.email);
console.log(userTwo.email);
