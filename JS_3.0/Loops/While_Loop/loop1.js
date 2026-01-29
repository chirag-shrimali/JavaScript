no = parseInt(prompt("\nEnter the No : "));

count = 0;

while(no > 0)
{
    no = Math.floor(no / 10);

    count++; // count += 1; // count = count + 1;
}

console.log("\nThe Total Count are : %d",count);