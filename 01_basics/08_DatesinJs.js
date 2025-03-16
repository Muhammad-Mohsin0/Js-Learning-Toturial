// Dates

let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate= new Date(2023, 0, 23)
// let myCreatedDate= new Date(2023, 0, 23,5,3)
// let myCreatedDate= new Date("2023-03-10")
let myCreatedDate= new Date("10-03-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/100));

let newDate=new Date()
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{weekday:'narrow'}));






