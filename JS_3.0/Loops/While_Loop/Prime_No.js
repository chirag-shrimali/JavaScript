// write the java script program to check that user entring the number is prime or not

let no = parseInt(prompt("\nEnter the No : "));

let i = 1;

let count = 0;

while(i <= no)
{
    if(no % i == 0)
    {
        count++; // count = count + 1; // count += 1;
    }
        i++;
}

if(count == 2)
{
    console.log(no,'is a Prime No...');
}
else{
    console.log(no,"is not a Prime No...");
}