class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)   // there is super method work like .call and this kyword. this is automatically take username from previous func
        this.email=email;
        this.password=password
    }
    addCourse(){
        console.log(`A new course added by ${this.username}`);
        
    }
}

const moshina = new Teacher("Yasir", "yasirhameed@google.com", "098")

// moshina.addCourse()
moshina.logMe()

const coffe = new User("bllack")
coffe.logMe()

// console.log(moshina === coffe); //false
// console.log(moshina === Teacher); // false
// console.log(moshina instanceof Teacher); //true
console.log(moshina instanceof User); //true

