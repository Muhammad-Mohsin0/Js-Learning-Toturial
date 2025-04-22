const promiseOne =new Promise(function(resolve, reject){
    //Do an Async task
    //DB calls, cryptograpghy, network
    setTimeout(function(){
        console.log('Async task is completed');
        
        resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log('Promised Consumed');
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 2000);
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'John', age: 30, email:"mosi@khan.com"})
    }, 3000);
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error) {
            resolve({username:"mohsin", password:"1234"})
        }else{
            reject('Error: Something went wrong')
        }
    },4000)
})
promiseFour.then(function(user){
    console.log(user);      
    return user.username
}).then(function(username){ 
    console.log(username);
}).catch(function(eror){
    console.log(eror);
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username:"JavaScript", password:"12345"})
        }else{
            reject('Error: JAVASCRIPT went wrong')
        }
    },5000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()



// async function getAllUsers(){
//    try
//    { const response = await fetch('https://api.github.com/users/Muhammad-Mohsin0')
//     const data = await response.json()
//     console.log(data);
// } catch(error){
//         console.log(error);
//     }       
// }
// getAllUsers()

fetch('https://api.github.com/users/Muhammad-Mohsin0')
.then(function(responce){
    return responce.json()
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})