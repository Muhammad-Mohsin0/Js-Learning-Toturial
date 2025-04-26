// ES6

// class User {
//     constructor(username, email, password){
//         this.username =username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const mohsin= new User("mosi","mosi@google.com", "232")
// console.log(mohsin.encryptPassword());
// console.log(mohsin.changeUserName());

//behind the scene 

function User(username, email, password){
    this.username =username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword =function(){
    return `${this.password}abc`
}

User.prototype.changeUserName =function(){
    return `${this.username.toUpperCase()}`
}

const mosina= new User("ahsan","ahsna@google.com", "2443")
console.log(mosina.encryptPassword());
console.log(mosina.changeUserName());