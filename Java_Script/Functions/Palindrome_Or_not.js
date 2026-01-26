function palindrome(no,rev)
{
    if(no == rev)
    return console.log(no + " is a Palindrome Number.");
    else
    return console.log(no + " is not a Palindrome Number."); 
}

// function isnotpalindrome(no)
// {

// }

let no = parseInt(prompt("\nEnter the No :"));

let dup = no;
let rev = 0;

while(dup > 0)
{
    let r = dup % 10;

    rev = (rev * 10) + r;

    dup = Math.floor(dup/10);
}

    console.log("\nThe Reverse Number is : " + rev);

palindrome(no,rev);

// if(no == rev)
// {
//     console.log(no + " is a Palindrome Number.");
// }
// else{
//     console.log(no + " is not a Palindrome Number.");
// }