function ispalindromestring()
{
    if(username == rev_name)
    return console.log(username + " is a Palindrome String.");
    else
    return console.log(username + " is not a Palindrome String.");
}

let username = prompt("\nEnter the User_Name : ");

let rev_name = "";

for(let i = username.length - 1;i>=0;i--)
{
    rev_name = rev_name + username[i];
}

ispalindromestring();

// if(username == rev_name)
// {
//     // console.log(username + " is a Palindrome String.");
// }
// else{
//     console.log(username + " is not a Palindrome String.");
// }

// console.log("\nThe User_Name is : " + username);

// console.log("\nThe Reverse_Name is : " + rev_name);