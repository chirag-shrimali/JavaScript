// Prime No ------------------------------------------------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let i = 1;

// let count = 0;

// while(i <= no)
// {
//     if(no % i == 0)
//     {
//         count += 1; // count = count + 1;
//     }
//     i++;
// }

// if(count == 2)
// {
//     console.log(no,"is a Prime No...");
// }
// else{
//     console.log(no,"is not a Prime No...");
// }

// Perfect No --------------------------------------------------------------------------------

// let no = 29;

// let count = 0;

// let sum = 0;

// let i = 1;

// while(i < no)
// {
//     if(no % i == 0)
//     {
//         sum = sum + i; // sum += i;
//     }
//         i++;
// }

// if(sum == no)
// {
//     console.log(no,"is a Perfect No...");
// }
// else{
//     console.log(no,"is not a Perfect No...");
// }

// Palindrome No ------------------------------------------------------------------------------

let no = parseInt(prompt("\nEnter the No : "));

let rev = 0;

let temp = no;

let i = 1;

while(i <= no)
{
    rem = no % 10;

    rev = (rev * 10) + rem;

    no = Math.floor(no / 10);
}

if(temp == rev)
{
    console.log(temp,"is a Palindrome No...");
}
else{
    console.log(temp,"is not a Palindrome No...");
}