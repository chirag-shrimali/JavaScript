//             0           1         2          3          4          5
let data = ['Chirag' , 'Suresh' , "Rakesh" , "Mukesh" , 'Mahesh' , 'Ramesh'];

let upper = [];

// for(let i = 0;i < data.length;i++)
// {
//     // console.log(data[i]);

//     upper.push(data[i]);
// }

// console.log(upper);

// -----------------------------------------------------------------------------------------

// For Each --------------------------

// data.forEach(element => {
//    console.log(element);
// });

// Map --------------------------------------------------

// upper = data.map((e)=>{
//     return e.toUpperCase();
// });

// console.log(upper);

// lower = data.map((element)=>{
//     return element.toLocaleLowerCase();
// });

// console.log(lower);

let arr = [5 , 8 , 10 , 20 , 7]

check = arr.map((e)=> e >= 8)

console.log(check);