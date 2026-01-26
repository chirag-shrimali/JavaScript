let ch = prompt("\nEnter the Character : ");

if((ch >= 'a' && ch <='z') || (ch >= 'A' && ch <='Z'))
{
    console.log(ch + " is a Alphabet.");
}
else if(ch >= '0' && ch <= '9')
{
    console.log(ch + " is a Digit.");
}
else{
    console.log(ch + " is a Special Character.");
}