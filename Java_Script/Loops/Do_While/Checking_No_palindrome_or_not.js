let no = parseInt(prompt("\nEnter the No : "));

let rev = 0;
let r;
let temp;

dup = no;
do
{
    r = dup % 10;

    rev = (rev * 10) + r;

    dup = Math.floor(dup/10);

}while(dup > 0);
    console.log("\nThe Reverse Number is : " + rev);

if(no == rev)
{
    console.log(no + " is a palindrome number.");
}
else{
    console.log(no + " is not a palindrome number.");
}