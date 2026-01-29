// task to performing that base and power user given we are calculating the power of the base number using for loop

let base = parseInt(prompt("\nEnter the Base : "));

let power = parseInt(prompt("\nEnter the Power : "));

// we are performing here multiplication.thus, we can take m = 1

m = 1;

for(let i = 1;i <= power;i++)
{
    m = m * base;
}

console.log("\nThe Base %d and Power %d",base,power,"Base Power are :",m);
