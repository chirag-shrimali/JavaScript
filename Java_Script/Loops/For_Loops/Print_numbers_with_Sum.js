let no = parseInt(prompt("\nEnter the No : "));

let sum = 0;

for(let i = 1;i<=no;i++)
{
    console.log(i);

    sum = sum + i;
}
    console.log("\nThe Sum of first " + no + " numbers are : " + sum);