// const coding =['JS','RB','CPP','PY','Dart']

// const myValues= coding.forEach((item) =>{  //forEach not return the values 
//     console.log(item)
//     return item                           // thats why we used Filter method
// })
// console.log(myValues);


const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums=myNums.filter( (nums) => {
//     return nums > 2
// })
     //filter used call back ftn match the condition and check every element , so conidtioned value true then return it "when scope open must used return key word". 

//      const newNums =[]
//       myNums.forEach((num) => {              // here we're used forEach
//         if (num > 3) {
//             newNums.push(num)
//         }
//      });
// console.log(newNums);   

const books=[
{title:"Book One", genre:"Fiction", Publish: 1982, Edition: 2004},
{title:"Book Two", genre:"Non-Fiction", Publish: 1992, Edition: 2003},
{title:"Book Three", genre:"History", Publish: 1932, Edition: 2001},
{title:"Book Four", genre:"Science", Publish: 1989, Edition: 2013},
{title:"Book Five", genre:"Fiction", Publish: 1912, Edition: 2044},
{title:"Book Six", genre:"Advanture", Publish: 1999, Edition: 2024},
{title:"Book Seven", genre:"Romance", Publish: 2012, Edition: 2025},
{title:"Book Eight", genre:"Thriller", Publish: 2082, Edition: 2018},
]

// const userBooks=books.filter( (bk) =>bk.genre ==="Fiction" )

const userBooks=books.filter( (bk) =>bk.Publish <=2000 && bk.genre ==="Fiction" )

console.log(userBooks);
