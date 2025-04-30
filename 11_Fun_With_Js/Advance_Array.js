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

