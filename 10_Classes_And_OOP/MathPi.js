const discriptor =Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(discriptor);

// console.log(Math.PI);
// Math.PI= 33
// console.log(Math.PI)

const property= {
    name:"hp",
    price: 300,
    isAvailable: true,

    addNew: function(){
console.log('Cannot add property');

    }
}
// console.log(Object.getOwnPropertyDescriptor(property)); //  undefined
console.log(Object.getOwnPropertyDescriptor(property, "name")); 

Object.defineProperty(property, "name",{
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(property, "name")); 

for (let [key, value] of Object.entries(property)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
        
    }
}