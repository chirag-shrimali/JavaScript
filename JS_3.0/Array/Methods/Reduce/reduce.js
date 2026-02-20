// in the java script there are having the methods of the array which is known as reduce

// let data = [10 , 20 , 30 , 40 , 45 , 63 , 89];

// console.log(data);

// let result = data.reduce((a , b)=> a + b , 0);

// console.log(result);

// -----------------------------------------------------------------------------------------

// let data = [1 , 2 , 3 , 4 , 5 , 6 , 8];

// console.log(data);

// let result = data.reduce((a , b)=>a * b , 1);

// console.log(result);

// ------------------------------------------------------------------------------------------

// let data = [1 , 5 , 6 , 8 , 6];

// console.log(data);

// // Maximum Value Return

// // let result = data.reduce((a , b)=>a > b ? a : b);

// // console.log(result);

// // Minimum Value Return

// let result = data.reduce((a , b)=>b > a ? a : b);

// console.log(result);

// ------------------------------------------------------------------------------------------

// let salary = [1000 , 5000 , 6000 , 700 , 2000];

// console.log(salary);

// let result = salary.reduce((a , b)=>a + b , 0);

// console.log(result);

// let result = salary.reduce((a , b)=>a * b , 1);

// console.log(result);

// MAXIMUM VALUE

// let result = salary.reduce((a , b)=>a > b ? a : b);

// console.log(result);

// MINIMUM VALUE

// let result = salary.reduce((a , b)=>b > a ? a : b);

// console.log(result);

// ------------------------------------------------------------------------------------------------------

// let user = {
    
//     id : 1 ,
    
//     name : "Chirag" ,

//     age : 19 ,

//     city : "Ahmedabad"
// };

// console.log(user);

// --------------------------------------------------------------------------------------------------------

let user = [
    // 0
    {
        id : 1 ,
    
        name : "Chirag" ,

        age : 19 ,

        city : "Ahmedabad"
    } ,
    // 1
    {
        id : 2 ,
    
        name : "Ramesh" ,

        age : 25 ,

        city : "Mumbai"
    } ,
    // 2
    {
        id : 3 ,
    
        name : "Suresh" ,

        age : 60 ,

        city : "Delhi"
    }

]

// console.log(user);

// console.log(user[0]);

// console.log(user[2]);

// console.log(user[1]);

// console.log(user[0].id);

// console.log(user[2].city);

// console.log(user[1].age);

// console.log(user[0].name);

// for(let i = 0;i < user.length;i++)
// {
//     console.log(user[i]);
// }

// user.forEach((users)=>{
//     console.log(users.id + " - " + users.name)
// });

let result = user.map((e)=>{
    return e.id + " - " + e.name
});

console.log(result);