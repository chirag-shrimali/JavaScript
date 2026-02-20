// in the array their are having the methods like sort...

// ----------------------------------------------------------------------------------------------------

//              0      1       2      3

// let salary = [10000 , 2000 , 3000 , 40000];

// let result = salary.map((a)=>a + 1000);

// let result = salary.flatMap((a)=>a + 1000);

// let result = salary.map((a)=>{
//     return a + 1000;
// });

// let result = salary.flatMap((a)=>{
//     return a + 1000;
// });

// let result = salary.reduce((a , b)=>
// {
//     a.push(b + 1000)

//     return a;
// } , []);

// console.log(salary);

// console.log(result);

// ----------------------------------------------------------------------------------------------------

//            0           1         2           3         4

// let data = ["Rahul" , "Chirag" , "Chintan" , "Ramesh" , "Suresh"];

//          0    1    2    3     4

// let data = [78 , 63 , 12 , 45 , 96]

// console.log(data);

// data.sort()

// console.log(data);

// -------------------------------------------------------------------------------------------------

// let data = ["Mukesh" , "Rahul" , "Sumit" , "Ketan" , "Chirag" , "Om" , "Jay" , "Suresh"];

// console.log(data);

// ascending order

// let result = data.sort((a , b)=> a.length - b.length);

// let result = data.sort((a , b)=> {
//     return a.length - b.length
// });

// decending order

// let result = data.sort((a , b)=> b.length - a.length);

// let result = data.sort((a , b)=>{
//     return b.length - a.length
// });

// console.log(result);

// ---------------------------------------------------------------------------------------------------------

// let data = [1000 , 50000 , 4000 , 2500 , 1200];

// console.log(data);

// ascending order

// let result = data.sort((a , b)=>a - b);

// let result = data.sort((a , b)=>{
//     return a - b
// });

// descending order

// let result = data.sort((a , b)=>b - a);

// let result = data.sort((a , b)=>{
//     return b - a
// });

// console.log(result);

// -------------------------------------------------------------------------------------------------

let emp = [
    {
        name : "Chirag" , age : 19 , city : "ahmedabad"
    } ,

    {
        name : "Rahul" , age : 25 , city : "delhi"
    }
];

// console.log(emp);

// ascending order

// let result = emp.sort((a ,b)=> a.age - b.age);

// let result = emp.sort((a ,b)=>{
//     return a.age - b.age}
// );

// descending order

// let result = emp.sort((a , b)=>b.age - a.age);

// let result = emp.sort((a , b)=>{
//     return b.age - a.age
// });

// --------------------------

// ascending order wise name

// let result = emp.sort((a , b)=>{
//     return a.name.length - b.name.length;
// });

// desending order wise name

let result = emp.sort((a , b)=>{
    return b.name.length - a.name.length;
});

console.log(result);