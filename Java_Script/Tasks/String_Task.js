// if both username and susername same then password will displays to the user and length also

// let username = "ChiragShrimali";

// let susername = prompt("\nEnter Your UserName : ");

// let password = "Chirag@0899";

// if(username == susername)
// {
//     console.log(password);
//     console.log(password.length);
// }

//-----------------------------------------------------------------------------

//concating @ with username...

// let username = "ChiragShrimali";
// let susername = "@";

// let x = susername + username;

// console.log(susername + username);
// console.log(x.length);

//---------------------------------------------------------------------------

// reverse of the numbers that users enters

// let no = parseInt(prompt("\nEnter the Number : "));

// let r;
// let rev = 0;

// let dup = no;

// for(;dup > 0;)
// {
//     r = dup % 10;

//     rev = (rev * 10) + r;

//     dup = Math.floor(dup/10);
// }
//     console.log("\nThe Reverse User_Name is : " + rev);

//----------------------------------------------------------------------------

// displays the reverse of the string that user enters

let username = "Chirag";
let rev = "";

for(let i = username.length - 1;i>=0;i--)
{
    rev += username[i];
}

console.log("UserName : " + username);
console.log("Reverse_Name : " + rev);
