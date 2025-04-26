// let myName = "John Doe    ";
// let myName2 = "John wickadoo      ";

// console.log(myName.truelength); 

let myHeros = ["thor",'spiderman']

let herosPower = {
    thor: "thunder",
    spiderman: "websling",

    getSpiderManPower: function(){
        console.log(`spiderman has ${this.spiderman} power`);
    }
}
Object.prototype.mohsin = function(){
    console.log(`Mohsin is present in all objects`);
}

Array.prototype.heyMohsin = function(){
    console.log(`Mohsin says hello`);
}

// herosPower.mohsin()
// myHeros.mohsin()
// myHeros.heyMohsin()
// herosPower.heyMohsin()


// ############### Inheritance ###############

const User = {
    name : "Mohsina",
    email: 'mohsin0@google.com'
}

const teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvailable: false,
}

const TASupport= {
    makeAssignment: 'JS Assignment',
    fulltime:true,
    __proto__:teachingSupport
}

teacher.__proto__=User

// Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher)



let anotherUsername = "MohsinKhana   "

String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength();
"Mohsn".trueLength()
"MohsnLI".trueLength()