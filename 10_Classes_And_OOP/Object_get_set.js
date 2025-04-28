const User ={
    _email: "mohsi@kallo.com",
    _password: "rcswf",

    get email(){
        return this._email.toUpperCase()
    },
    set password(value){
        this._email=value
    }
}

const mohsin =Object.create(User)
console.log(mohsin.email);
