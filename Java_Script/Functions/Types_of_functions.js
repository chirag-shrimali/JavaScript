// there are having four types of functions
// 1.NA-NR 2.WA-NR 3.NA-WR 4.WA-WR

//1.NA-NR

// function add()
// {
//     let a = parseInt(prompt("\nEnter the No1 : "));
//     let b = parseInt(prompt("\nEnter the No2 : ")); 
//     let add = a + b;
//     console.log("\nAddition : " , add);
// }

// add();

//-------------------------------------------------------------------------------------------------------

//2.WA-NR

// function sub(a,b)
// {
//     let ans = a - b;
//     console.log("\nSubtraction : " + ans);
// }

// let a = parseInt(prompt("\nEnter the No1 : "));
// let b = parseInt(prompt("\nEnter the No2 : "));

// sub(a,b);

//-------------------------------------------------------------------------------------------------------

//3.NA-WR

// function mul()
// {
//     // statics
//     // let a = 9;
//     // let b = 6;
//     // dynamics
//     let a = parseInt(prompt("\nEnter the No1 : "));
//     let b = parseInt(prompt("\nEnter the No2 : "));
//     return a * b;
// }

// console.log("\nMultiplication : " + mul());

//-------------------------------------------------------------------------------------------------------

//4.WA-WR

// function div(a,b)
// {
//     return a/b;
// }

// let a = parseInt(prompt("\nEnter the No1 : "));
// let b = parseInt(prompt("\nEnter the No2 : "));

// console.log("\nDivision : " , div(a,b));

//-------------------------------------------------------------------------------------------------------

// using 3 variables in multiplications functions WR-WA

function mul(a,b,c)
{
    return a * b * c;
}

let a = parseInt(prompt("\nEnter the No1 : "));
let b = parseInt(prompt("\nEnter the No2 : "));
let c = parseInt(prompt("\nEnter the No3 : "));

console.log("\nMultiplication : " , mul(a,b,c));