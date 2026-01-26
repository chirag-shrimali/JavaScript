let no = parseInt(prompt("\nEnter the No : "));

let i;
let count = 0;

for(i=1;i<=no;i++)
{
    if(no % i == 0)
    {
        count++;   
    }
}
if(count == 2)
{
    console.log(no + " is a Prime No.");
}    
else{
    console.log(no + " is not a Prime No.");
}

// console.log(Math.floor(Math.random() * 9000) + 1000);