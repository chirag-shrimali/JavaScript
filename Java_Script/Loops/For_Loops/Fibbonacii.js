let no = parseInt(prompt("\nEnter the No : "));

let a = 0;
let b = 1;
let c;

console.log("\nThe Fibbonacci series of the given numbers are : ");

for(let i = 1;i<=no;i++)
{
    c = a + b;

    console.log(" " + c);

    a = b;

    b = c;
}