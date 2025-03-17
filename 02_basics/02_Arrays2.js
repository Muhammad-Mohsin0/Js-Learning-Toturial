const marvelHeros=["Thor","Spiderman","Batman","Ironman"]
const DcHeros=["Superman","Aquaman","Antman","Googliman"]

// marvelHeros.push(DcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[4][3]);

// const allHeros=marvelHeros.concat(DcHeros)  
// console.log(allHeros);

const allNewHeros=[...marvelHeros,...DcHeros] //spread
// console.log(allNewHeros);

const anotherArray=[1,2,3,4,[3,5,35,35],7,[3,5,6,4,[5,57,7]]]
console.log(anotherArray.flat(4));


console.log(Array.isArray("mohsin")); 
console.log(Array.from("mohsin"));
console.log(Array.from({name:"mosi"})); //interesting

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));
