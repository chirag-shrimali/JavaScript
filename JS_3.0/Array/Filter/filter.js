// filter programs

//              0          1          2          3         4        5        6       7        8        8

// let users = ["Chirag" , "Om" , 'Paresh' , 'Mukesh' , "Ram" , "Shyam" , 'Dev' , 'Daksh' , "Ramesh" , "Naman"];

// let result = users.filter((user)=>user.length > 5);

// console.log(users);

// console.log(result);

// ----------------------------------------------------------------------------------------------------------

//              0          1         2        3        4        5          6          7

// let users = ['Chirag' , 'Chetan' , "Ram" ,"Chiman" , 'Dev' , 'Rakesh' , "Chintan" , "Shyam"];

// let result = users.filter((user)=> user.toLowerCase().startsWith('c'));

// console.log(users);

// console.log(result);

// ----------------------------------------------------------------------------------------------------------

// let data = [1 , 2 , 3 , 4 , 5];

// // let result = data.map((a)=>{
// //     return a * a; // a ** 2
// // });

// let result = data.map((a)=> a * a);

// console.log(data);

// console.log(result);

// ------------------------------------------------------------------------------------------------------------

// let data = [55 , 78 , 36 , 91 , 14 , 37];

// // // let result = data.filter((a)=> a % 2 == 0);

// let result = data.filter((a)=>
// {
//     return a % 2 == 0;
// });

// console.log(data);

// console.log(result);

// ---------------------------------------------------------------------------------------------------------

// let arr = [

//             {name : "Chirag" , age : 19} ,

//             {name : "Ramesh" , age : 25 , email : "chirag@123.com"}
          
//         ];

// // let result = arr.map((element)=>element)

// let result = arr.map((element)=>
// {
//     // return element.name
//     return
//     {
//         name : element.name ,

//         age : element.age

//         // email : element.email
//     }
// });

// console.log(result);

// let student=[
//                 {name : "Chirag" , age : 19 , id : 1},
                
//                 {name : "Suresh" , age : 25 , id : 2}
//             ]

// let result = student.map((stu)=>{
//     return {
//         name:stu.name,
//         age:stu.age,
//         id:stu.id
//     }
// });

// console.log(result);

// ------------------------------------------------------------------------------------------------------

// let data = [
//     {
//         name : "Chirag" , age : 19 , id : 1
//     } ,

//     {
//         name : "Suresh" , age : 25 , id : 2
//     }
// ];

// console.log(data);

// let result = data.map((elements)=>elements)

// console.log(result);

// let result = data.map((elements)=>{
//     return{
//         name : elements.name ,
//         age : elements.age ,
//         id : elements.id
//     }
// });

// console.log(result);

// ----------------------------------------------------------------------------------------------------------

// let li = ["Ram" , "Shyam" , "Amit" , "Aarav"];

// let result = li.map((a)=>a.toLowerCase().startsWith('a')); // it will be return the boolean value if conditions is true return return otherwise false

// let result = li.filter((a)=>a.toLowerCase().startsWith('a')); // it will be return the list value in which lists startswith a return that elements 

// let result = li.map((a)=>{
//     return a.toLowerCase().startsWith('a');
// });

// let result = li.filter((a)=>{
//     return a.toLowerCase().startsWith('a');
// });

// console.log(result);

// ------------------------------------------------------------------------------------------------------

//  let arr = [
//              {name : "kunal" , age : 22 , marks : 40} ,

//              {name : "amit" , age : 23 , marks : 90}
           
//            ];

// console.log(arr);

// let result = arr.map((elements)=>elements);

// console.log(result);

// let result = arr.filter((elements)=>elements);

// console.log(result);

// let result = arr.map((elements)=>{
//     return elements
// });

// console.log(result);

// let result = arr.filter((elements)=>{
//     return elements
// });

// console.log(result);

// let result = arr.map((elements)=>{
//     return {
//         name : elements.name ,

//         age : elements.age ,

//         id : elements.id
//     }
// });

// console.log(result);

// let result = arr.filter((elements)=>{
//     return {
//         name : elements.name ,

//         age : elements.age ,

//         id : elements.id
//     }
// });

// console.log(result);

// ----------------------------------------------------------------------------------------

// let arr = [
//              {name : "kunal" , age : 22 , marks : 40} ,

//              {name : "amit" , age : 23 , marks : 90}
           
//            ];

// let result = arr.filter((a)=>a.marks > 40);

// console.log(result);

// let arr = [
//              {name : "kunal" , age : 22 , marks : 40} ,

//              {name : "amit" , age : 23 , marks : 90}
           
//            ];

// let result = arr.map((a)=>a.marks > 40);

// console.log(result);

// let arr = [
//              {name : "kunal" , age : 22 , marks : 40} ,

//              {name : "amit" , age : 23 , marks : 90}
           
//            ];

// let result = arr.map((a)=>{
//     return a.marks > 40;
// });

// console.log(result);

// let arr = [
//              {name : "kunal" , age : 22 , marks : 40} ,

//              {name : "amit" , age : 23 , marks : 90}
           
//            ];

// let result = arr.filter((a)=>{
//     return a.marks > 40;
// });

// console.log(result);

// let arr = [
//              {name : "kunal" , age : 22 , marks : 40} ,

//              {name : "amit" , age : 23 , marks : 90}
           
//            ];

// let result = arr.flatMap((a)=>{
//     return a.marks > 40;
// });

// console.log(result);

// 2D Lists ---------------------------------------------------------------------------------------------------------

let data = [
    ["Chirag" , "Ramesh"] , 
    
    ["Suresh" , "Mukesh"] , 
    
    ["Mahesh" , "Ketan"]
];

// console.log(data);

// let result = data.map((e)=>e)

// console.log(result);

// let result = data.filter((e)=>e)

// console.log(result);

// let result = data.flatMap((e)=>e)

// console.log(result);

// let result = data.map((e)=>{
//     return e;
// });

// console.log(result);

// let result = data.filter((e)=>{
//     return e;
// });

// console.log(result);

let result = data.flatMap((e)=>{
    return e;
});

console.log(result);

// let result = data.map((elements)=>{
//     return elements.filter((e)=>{
//         return e.length == 6;
//     });
// });

// console.log(result);

let result1 = data.flatMap((elements)=>{
    return elements.filter((e)=>{
        return e.length == 6;
    });
});

console.log(result1);