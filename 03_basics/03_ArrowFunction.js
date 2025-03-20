// "This" Keyword refered for Current Context(values). and work in object
const user ={
    username : "mohsin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username= "Mosi"
// user.welcomeMessage()
// console.log(this);

// function affan(){
//     let username="khan"
//     console.log(this.username); //for "this" keyword is not perform in function
    
// }
// affan()


// const affan = function(){
//     let username="khan"
//     console.log(this.username);
// }
const affan =() =>{
    let username="khan"
    console.log(this);
}
affan()

// Arrow Function
// const addTwo= (num1, num2)=>{
//     return num1 +num2     //explicity return
// }
// const addTwo= (num1, num2)=>  num1 +num2    //"implicit return", written in oneline
// const addTwo= (num1, num2)=>  (num1 +num2)

const addTwo= (num1, num2)=>  ({username: " maaani"})
console.log(addTwo(3,5))