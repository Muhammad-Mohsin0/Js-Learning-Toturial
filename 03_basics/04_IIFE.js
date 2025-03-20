//Immediately Invoked Function Expressions

function dataBase (){
    console.log("Database Conneted");
}
dataBase();  // Execute Simple function

(function dataBase(){
    console.log("Database Conneted");
})();        //this is IIFE,and also avoid the global scope polutions

((name)=>{
    console.log(`Database Conneted two ${name}`);
})("Mohsin") 