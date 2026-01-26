// sum with factorial

let no = parseInt(prompt("\nEnter the No : "));

let fc = 1;

let sum = 0;

for(let i = 1;i<=no;i++)
{
    fc = fc * i;

    sum = sum + i; // sum += i;
}

    console.log("\nThe Factorial of" , no , "are : " + fc);

    console.log("\nThe Sum of First" , no , "numbers are : " + sum);