// for in loop suggest for object & For of is for array . lekin zrori bhi nae 
const myObject={
    'game1':'NFS',
    'game2':'GTA',
    'game3':'PUBG'
}
for (const key in myObject) {
//    console.log(`${key} is for :${myObject[key]}`);
}

const programming =['JS','RB','CPP','PY']
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

// const map =new Map()
// map.set('PK', 'Pakistan')
// map.set('PK', 'Pakistan')
// map.set('IN', 'INDIA')
// map.set('FR', 'FRANCE')
// for (const key in map) {
//    console.log(key);
//    // Map()is not itratable.
// }