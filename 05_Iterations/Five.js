const coding =['JS','RB','CPP','PY','edfdsfsdfs']
// const coding =[10,10,20,30]

// coding.forEach(function(item){
//     console.log(item)
// })

// coding.forEach((item)=>{
//     console.log(item)
// })

// function myName (item){
//     console.log(item*2);
// }

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr
//     );
// })

const myCoding= [
    {
        languageName:"javascript",
        languageFileName: "Js"
    },
    {
        languageName:"java",
        languageFileName: "Java"
    },
    {
        languageName:"python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    // used forEach to get the language name in object from array
})