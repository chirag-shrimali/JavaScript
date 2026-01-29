// write the java script program to check that user entering the no is perfect number or not

no = parseInt(prompt("\nEnter the No : "));

i = 1;

sum = 0;

while(i < no)
{
    if(no % i == 0)
    {
        sum = sum + i; // sum += i;
    }
    i++;
}

if(sum == no)
{
    console.log(no,"is a Perfect No...");
}
else{
    console.log(no,"is not a Perfect No...");
}