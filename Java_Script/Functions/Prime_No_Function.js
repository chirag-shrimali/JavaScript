function isPrime(no)
{
    console.log(no + " is a Prime Number.");
}

function isnotPrime(no)
{
    console.log(no + " is not a Prime Number.");
}

let no = parseInt(prompt("\nEnter the No : "));

let count = 0;

for(let i = 1;i<=no;i++)
{
    if(no % i == 0)
    {
        count++;
    }
}
if(count == 2)
{
    isPrime(no);
    // console.log(no + " is a Prime Number.");
}
else{
    isnotPrime(no);
    // console.log(no + " is not a Prime Number.");
}