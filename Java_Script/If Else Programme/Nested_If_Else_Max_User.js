let a = parseInt(prompt("\nEnter the No1 : "));
let b = parseInt(prompt("\nEnter the No2 : "));
let c = parseInt(prompt("\nEnter the No3 : "));

if(a > b)
{
    if(a > c)
    {
        console.log("\nA is Maximum.");
    }
    else{
        console.log("\nC is Maximum.");
    }
}

else{
    if(b > c)
    {
        console.log("\nB is Maximum.");
    }
    else{
        console.log("\nC is Maximum.");
    }
}

// const IsAlive = false;
// let age = 20;

// if(IsAlive)
// {
//     if(age >= 18)
//     {
//         console.log("\nYou are eligible to give the vote.");
//     }
//     else{
//         console.log("\nYou are not eligible to give the vote.");
//     }
// }
// else{
//     console.log("\nInvalid age date of selection choose valid age of number and you are not alive.");
// }