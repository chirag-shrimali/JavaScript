// 2D Aarray Tasks

//                 0          1         2        3        4       5       6         7          8        9         10         11

let users = ['Chirag' , 'Chetan' , "Ram" , "Chiman" , 'Dev' , 'Om' , "Sita" , "Roman" , 'Rakesh' , 'Gita' , "Chintan" , "Shyam" , "Powel"];

// let result = users.flatMap((a)=>a.toLowerCase().includes('o'));

// let result = users.map((a)=>a.toLowerCase().includes('o'));

// let result = users.filter((a)=>a.toLowerCase().includes('o'));

// let result = users.map((a)=>{
//     return a.toLowerCase().includes('o');
// });

// let result = users.flatMap((a)=>{
//     return a.toLowerCase().includes('o');
// });

let result = users.filter((a)=>{
    return a.toLowerCase().includes('o');
});

console.log(users);

console.log(result);