function User(email, username){
    this._email= email
    this._username= username

    Object.defineProperty(this, 'email', {
        get: function (){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email= value 
        }
    })

    Object.defineProperty(this, 'username', {
        get: function (){
            return this._username.toUpperCase()
        },
        set: function(value){
            this._username= value 
        }
    })

}

const moshin = new User("moishsoa@google.com", "johan wickado")
console.log(moshin.email);
console.log(moshin.username);
