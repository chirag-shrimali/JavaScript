/*
            Loops
        ------------
        |          |
      Entry       Exit
    for , while  do while  
*/


// for loop --> Entry Controlled Loop

/*
    for(initial , condition , increament/decreament(update))
    {
        statements
    }
*/

// print 1 to 10 number ----------------------------------------------------------------------

// let no = parseInt(prompt("\nEnter the Number : "));

// for(let i = 1;i <= no;i++)
// {
//     console.log(i);
// }

// print 10 to 1 reverse ---------------------------------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// for(let i = no;i >= 1;i--)
// {
//     console.log(i);
// }

// calculate the sum the number that enter by the user ---------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let sum = 0;

// for(let i = 1;i <= no;i++)
// {
//     console.log(i);

//     sum = sum + i; // sum += i;
// }

// console.log("\nThe Sum of %d",no,"number are :",sum);

// calculate the sum of even and odd number the number that enter by the user ---------------------------

let no = parseInt(prompt("\nEnter the No : "));

let evenSum = 0;

let oddSum = 0;

for(let i = 1;i <= no;i++)
{
    if(i % 2 == 0)
    {
        evenSum = evenSum + i; // evenSum += i;
    }
    else{
        oddSum = oddSum + i; // oddSum += i;
    }
}

console.log("\nThe EvenNo Sum are :",evenSum);

console.log("\nThe OddNo Sum are :",oddSum);

// calculate the factorial the number that enter by the user -------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let fc = 1;

// for(let i = 1;i <= no;i++)
// {
//     fc = fc * i;
// }

// console.log("\nThe Factorail of %d",no,"number are :",fc);

// calculate the power the number that enter by the user ----------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let power = parseInt(prompt("\nEnter the Power : "));

// let fc = 1;

// for(let i = 1;i <= power;i++)
// {
//     fc = fc * no;
// }

// console.log("\nThe Number %d",no,"power",power,"are :",fc);