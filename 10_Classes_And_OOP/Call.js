function setUserName (username){
    // complex DB 
    this.username = username
    console.log("called")
    
}

function createUser(username, email, password){
    setUserName.call(this,username) // .call and must use this keyword to get previous function 
    this.email= email
    this.password= password
}

const mohsin = new createUser("mohsina","mosi@google.com","2345")
console.log(mohsin)
