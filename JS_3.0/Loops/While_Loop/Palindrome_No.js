// write the java script program to check that user enter the number is palindrome or not

no = parseInt(prompt("\nEnter the No : "));

temp = no;

rev = 0;

while(no > 0)
{
    rem = no % 10;

    rev = (rev * 10) + rem;

    no = Math.floor(no / 10);
}

if(rev == temp)
{
    console.log(temp,"is a Palindrome No...");
}
else
{
    console.log(temp,"is not a Palindrome No...");
}