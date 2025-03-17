//Array

const myArr =[1,2,3,6,4,5]
const myHeros=["Muhammad(PBUH)","Allama Iqbal"]
const myArr2=new Array(1,1,3,4)
// console.log(myArr[2]);

//Array Methods

// myArr.push(6,7,8,9) //add at the end of array
// myArr.pop()         //remove last element
// myArr.unshift(9,4,34,34,34) //add element in start of array
// myArr.shift()               //remove the first element

// console.log(myArr.includes(6)) // check the giving element
// console.log(myArr.indexOf(4))   

// const newArr = myArr.join() //change in string and remove the square brackets
// console.log(myArr);
// console.log(typeof newArr);


// Slice & Splice

console.log("A ",myArr);

const myn1=myArr.slice(1,4) //work without maniplute original array
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3) //Splice manulipate the original array
console.log("C ",myArr);
console.log(myn2);
