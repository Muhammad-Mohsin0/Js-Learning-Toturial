//Scopes, Global Scope and Block Scope

// var c=300
let a =2333
if(true){
    let a= 10
    const b=20
    var c=3
    // console.log(`INNER: ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);


//++++++++++++++ Nested Scope
function one(){
    const username="Mohsin"
    function two(){
        const website="Youtube"
        // console.log(username);
    }
    //console.log(website)
    two()
}
one()
//Clousre ?


if(true){
    const username="moshina"
    if(username==="moshina"){
        const website=" Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//++++++++ Interesting++++++++++
// Hoisting

console.log(addOne(5)); // addOne is accessible before function
function addOne(num){
    return num+1
}

addTwo(5) //addTwo is not accessible before const addTwo 
const addTwo=function (num){
    return num +2
}
