//             0           1         2          3          4          5
// let data = ['Chirag' , 'Suresh' , "Rakesh" , "Mukesh" , 'Mahesh' , 'Ramesh'];

// let upper = [];

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

// let arr = [5 , 8 , 10 , 20 , 7]

// check = arr.map((e)=> e >= 8)

// console.log(check);

// Task - 1 Palindrome Return only in the other array using map

// let data = ["Chirag" , 'naman' , "Naman"];

// let pal = data.map((e)=>
// {
//     return e.split(0 , data.length);
// });

// console.log(pal);

// // Upper Case -------------------------------------------------

// //             0           1         2          3          4          5
// let data = ['Chirag' , 'Suresh' , "Rakesh" , "Mukesh" , 'Mahesh' , 'Ramesh'];

// console.log(data);

// let result = data.map((e)=>e.toUpperCase());

// console.log(result);

//             0           1         2          3          4          5
// let data = ['Chirag' , 'Suresh' , "Rakesh" , "Mukesh" , 'Mahesh' , 'Ramesh'];

// console.log(data);

// let result = data.flatMap((e)=>e.toUpperCase());

// console.log(result);

// Lower Case -------------------------------------------------

// //             0           1         2          3          4          5
// let data = ['Chirag' , 'Suresh' , "Rakesh" , "Mukesh" , 'Mahesh' , 'Ramesh'];

// console.log(data);

// let result = data.map((e)=>e.toLowerCase());

// console.log(result);

// //             0           1         2          3          4          5
// let data = ['Chirag' , 'Suresh' , "Rakesh" , "Mukesh" , 'Mahesh' , 'Ramesh'];

// console.log(data);

// let result = data.flatMap((e)=>e.toLowerCase());

// console.log(result);

// ------------------------------------------------------------------------------------------------------

// let arr = [5 , 10 , 20];

// console.log(arr);

// let result = arr.filter((e)=>e);

// console.log(result);

// let result = arr.map((e)=>e);

// console.log(result);

// let result = arr.flatMap((e)=>e);

// console.log(result);

// let result = arr.map((e)=>{
//     return e > 8;
// });

// console.log(result);

// let result = arr.flatMap((e)=>{
//     return e > 8;
// });

// console.log(result);

// let result = arr.filter((e)=>{
//     return e > 8;
// });

// console.log(result);

// ----------------------------------------------------------------------------------------------------------

// let arr = ['a' , 'b' , 'c'];

// console.log(arr);

// // let result = arr.flatMap((e , i)=>i + " - " + e);

// let result = arr.map((e , i)=>i + " - " + e);

// console.log(result);

// ----------------------------------------------------------------------------------------------------------

// IMPORTANT :- for reverse the string string.split('').reverse().join('');

// // //             0          1         2
// let arr = ['chirag' , 'ramesh' , 'naman'];

// console.log(arr);

// let result = arr.map((e)=>{
//     return e == e.split('').reverse().join('')
// });

// console.log(result);

// // //         0          1         2          3
// let arr = ['madam' , 'chirag' , 'ramesh' , 'naman'];

// console.log(arr);

// let result = arr.flatMap((e)=>{
//     return e == e.split('').reverse().join('')
// });

// console.log(result);

// // //         0          1         2          3
let arr = ['madam' , 'chirag' , 'ramesh' , 'naman'];

console.log(arr);

let result = arr.filter((e)=>{
    return e == e.split('').reverse().join('')
});

console.log(result);

// ---------------------------------------------------------------------------------------------------------

//             0          1         2
// let arr = ['chirag' , 'ramesh' , 'naman'];

// let arr1 = [];

// for(let i = 0;i < arr.length ; i++)
// {
//     if(arr[i].split('').reverse().join('') == arr[i])
//     {
//         console.log(arr1.push(i));
//     }
// }