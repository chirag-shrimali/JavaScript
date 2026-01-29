// write the java script program in which user enter any number and using of while loop we are counting that user entering number how many digits are there...

no = parseInt(prompt("\nEnter the No : "));

temp = no;

count = 0;

while(no > 0)
{
    no = Math.floor(no / 10); // conversioning floating value to integer
    count = count + 1; // count++; // count += 1; 
}

console.log("\nThe Number %d",temp,"Digits are :",count)