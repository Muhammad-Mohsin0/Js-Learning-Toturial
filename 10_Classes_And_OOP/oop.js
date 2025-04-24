// ##########Object Literal##########

const user ={
    username: "John wick",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got User Details From Database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}
// console.log(user.username); // John wick
// console.log(user.getUserDetails()); 
// console.log(this);

// ######################## Constructor function ##########

function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }
     return this
}
//  when 'new' keyword is used, it creates a new empty object and 
// gives a constructed function
// and sets the 'this' keyword to that object and added to that constructed function.
// and returns the object at the end of the function
const userOne= new User("John wick", 8, true); 
const userTwo= new User("John doe", 5, false);
console.log(userOne.constructor); // [Function: User]
console.log(userTwo instanceof User); // true
