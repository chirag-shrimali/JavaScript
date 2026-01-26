let no = parseInt(prompt("\nEnter the No : "));

// using for loops

// let count = 0;

// for(let i = 1;i<=no;i++)
// {
//     if(no % i == 0)
//     {
//         count++;
//     }
// }
// if(count == 2)
// {
//     console.log(no + " is a Prime Number.");
// }
// else{
//     console.log(no + " is not a Prime Number.");
// }

//-------------------------------------------------------------------------------------------

// using while loops

// let count = 0;

// let i = 1;

// while(i<=no)
// {
//     if(no % i == 0)
//     {
//         count++;
//     }
//         i++;
// }
// if(count == 2)
// {
//     console.log(no + " is a Prime Number.");
// }
// else{
//     console.log(no + " is not a Prime Number.");
// }

//-------------------------------------------------------------------------------------------

// using Do_While loops

let count = 0;

let i = 1;

do
{
    if(no % i == 0)
    {
        count++;
    }
        i++;
}while(i<=no);
if(count == 2)
{
    console.log(no + " is a Prime Number.");
}
else{
    console.log(no + " is not a Prime Number.");
}
