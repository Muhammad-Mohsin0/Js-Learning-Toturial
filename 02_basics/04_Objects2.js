// const tinderUser= new Object()
const tinderUser={}
tinderUser.id="1234ne"
tinderUser.name="Jack Sparrow"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser ={
    email:"some@google.com",
    fullname:{
        userFullname:{
            firstname:"Mohsin",
            lastname:"Muhammad"
        }
    }
}
// console.log(regularUser.fullname?.userFullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"c",6:"d"}
// const obj4={obj1,obj2}

// const obj4=Object.assign({},obj1,obj2,obj3)  //in this {} is target where other all source save the elements or keys or values

const obj4 ={...obj1,...obj2}
// console.log(obj4);

const users =[
    {
        id:2,
        name:"ayan"
    },
    {
        id:3,
        name:"Affan"
    },
    {
        id:4,
        name:"Zayan"
    },
]
// console.log(users[0].name)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name")); //to check where have this value


// ++++++++++++++++ Object De-Structuring ++++++++++++++++

const course = {
    courseName:"JavaScript",
    price:"999",
    courseInstructor:"Mohsin"
}

// console.log(course.courseInstructor)
const {courseInstructor:Instructor}=course
// console.log(courseInstructor);
console.log(Instructor);


// ++++++++JSON API+++++++++
// {
//     "name":"Mohsina",
//     "coursea":"JavaScript",
//     "pricea":"Free"
// }

[

    {},
    {},
    {}
    
]
