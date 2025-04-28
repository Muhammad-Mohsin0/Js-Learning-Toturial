class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }
    //get and set is overwrite the value 
    
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }


    get password(){
        return `${this._password.toUpperCase()}efefe`
    }
    set password(value){
             this._password=value
    }
}

const mohsin= new User("mohsin@google.com", "jjjk")
console.log(mohsin.password);
console.log(mohsin.email);
