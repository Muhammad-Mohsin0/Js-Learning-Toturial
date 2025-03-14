// String nd Methods

const name="Mohsin"
const age= 25

// console.log(name +" is "+ age + " year old");  outdated

// console.log(`My name is ${name} and ${age} years old`);

const gameName=new String('Mohsin-khan')

// console.log(gameName[5])
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

const newString= gameName.substring(0, 4)
console.log(newString);

const anotherString= gameName.slice(0,6)
console.log(anotherString);

const newStringOne= "     Mohsi   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url="https://mohsin/mosikhan%20muhammad"
// console.log(url.replace("mosi","Mhsin"));
// console.log(url.includes('mohsin'));