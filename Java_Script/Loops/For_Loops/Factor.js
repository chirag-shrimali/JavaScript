let no = parseInt(prompt("\nEnter the number that you find it's factor : "));

for(let i = 1;i<=no;i++)
{
    if(no % i == 0)
    {
        console.log(" " + i);
    }
}