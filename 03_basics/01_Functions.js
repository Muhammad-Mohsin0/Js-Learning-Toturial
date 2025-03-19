function sayMyName(){
    console.log("M");
    console.log("O");
    console.log("H");
    console.log("S");
    console.log("I");
    console.log("N");
}
// sayMyName()   //Only sayMyName is "Reference" and with () it will be "Execute"

// function addTwoNumbers (number1, number2){ //in this "number1 , number2" is "parameter"
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,3)  //a, in this ( ),are "Argumens" 
//b, but assign addTwoNumber in another variable then result will be undefined
//like const result = addTwoNumbers(3,3)

function addTwoNumbers (number1, number2){ 
        // let result=(number1 + number2);
        // return result
        return number1+number2
    }
    const boom=addTwoNumbers(3,3)
    // console.log('Result:', boom);
    

    function logInUserMessage(username = "mosi"){
        if(username === undefined){
            console.log("Please enter the number");
            return
        }
        return `${username} is loggedin now`
    }
    // console.log(logInUserMessage("Mohsin"));
    // console.log(logInUserMessage("Ali Raza"));//"Ali Raza" will be overwrite to over "mosi"
     

function calculateCartPrice(value1,value2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,200,44444));


// =======================
const user ={
    username: "mohsin",
    prices:233
}
function handleObject(anyobject){
    console.log(`The username is ${anyobject.username} and price is ${anyobject.prices}`);

}
// handleObject(user)
handleObject({
    username: "Munna",
    prices: 3333

})


const myNewArray=[200,400,500]
function returnSecondValue(getArray){
return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,500,700]));
