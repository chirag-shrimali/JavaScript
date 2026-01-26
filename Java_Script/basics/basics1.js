var a = 10;

console.log("\nOuter Value of A is : " + a);

{
    console.log("\nThe Inner Value of A is : " , a);
}

b = 10;

console.log("\nThe Outer Value of B is : " + b);

{
    console.log("\nThe Inner Value of B is : " , b);
}

const c = 10;

console.log("\nThe Outer Value of C is : " + c);

{
    console.log("\nThe Inner Value of C is : ",c);
}

let d = 10;

console.log("\nThe Outer Value of D is : " + d);

{
    console.log("\nThe Inner Value of D is : " , d);
}

// {
//     let f = 6; 
// }

// console.log("\nThe Outer Value of F is : " + f);

// {
//     var h = 7;
// }

// console.log("\nThe Outer Value of H is : " , h);

//     const x = 3.14;

// console.log("\nThe Outer Value of X is : " + x);

// {
//     e = 3.14;
// }

// console.log("\nThe Outer Value of E is : " + e);

{
    let n = 5;
    console.log("\nThe Inner Value of N is : " + n);
}
{
    let n = 6;
    console.log("\nThe Inner Value of N is : " , n);
}