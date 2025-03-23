// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr=[1, 2, 3, 4, 5]
for (const number of arr) {
    // console.log(number);
}

const greetings= "Hello World"
for (const greet of greetings) {
    // if(greet ===" "){             // break and continue to handle the space
    //     break
    // }
    if(greet ===" "){
        continue
    }
    // console.log(greet);
}

//Maps

const map =new Map()
map.set('PK', 'Pakistan')
map.set('PK', 'Pakistan')
map.set('IN', 'INDIA')
map.set('FR', 'FRANCE')
// console.log(map);
for (const [key, value] of map) {
    // console.log(key,":-", value);
}

const myObject={
    'game1':'NFS',
    'game2':'GTA',
    'game3':'PUBG'
}
// for (const [key,value] of myObject) {     //myObject is not iterable
//         console.log(key,":-", value);
// }