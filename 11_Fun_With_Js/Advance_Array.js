const myArray=[]
// %DebugPrint(myArray)


//continious Array , Holey Array

// SMI (Small Integar)
// Packed Element
// Double (float, string, function)

const arrTwo=[1,2,3,4,5]
// PACKED SMI ELEMENTS
arrTwo.push(6.0)
// PACKED DOUBLE ELEMENTS
arrTwo.push('8')
// PACKED ELEMENTS

arrTwo[10]=11
// Holey Elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10) // if Holes are then every time all checking is performed. //Holes are very expensive in JS

const arrThree= [1,2,3,4,5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED  // that is optimized  and Contimnious waly
// H_SMI > H_DOUBLE > H_PACKED   // Holes waly

const arrFour =new Array (3)
// just 3 holes . HOLEY SMI ELEMENTS
arrFour[0]='1'  // Holey packed ELEMENTS
arrFour[1]='2'  // Holey packed ELEMENTS
arrFour[2]='3'  // Holey packed ELEMENTS

const arrFive = []
arrFive.push('1') //Packed elements
arrFive.push('2') //Packed elements
arrFive.push('3') //Packed elements

const arrSix = [1,2,3,4,5]
arrSix.push(Infinity)

// for , for-of , forEach