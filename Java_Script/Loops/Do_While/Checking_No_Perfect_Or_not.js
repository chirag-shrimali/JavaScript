let no = parseInt(prompt("\nEnter the Number : "));

// using for loops

// let sum = 0;

// for(var i = 1;i<no;i++)
// {
//     if(no % i == 0)
//     {
//         sum = sum + i;
//     }
// }
// if(sum == i)
// {
//     console.log(no + " is a Perfect Number.");
// }
// else{
//     console.log(no + " is not a Perfect Number.");
// }

//---------------------------------------------------------------------------------------------------

// using while loops

// let sum = 0;

// let i = 1;

// while(i<no)
// {
//     if(no % i == 0)
//     {
//         sum = sum + i;
//     }
//         i++;
// }
// if(sum == i)
// {
//     console.log(no + " is a Perfect Number.");
// }
// else{
//     console.log(no + " is not a Perfect Number.");
// }

//---------------------------------------------------------------------------------------------------

// using Do_While loops

let sum = 0;

let i = 1;

do
{
    if(no % i == 0)
    {
        sum = sum + i;
    }
        i++;
}while(i<no);
if(sum == i)
{
    console.log(no + " is a Perfect Number.");
}
else{
    console.log(no + " is not a Perfect Number.");
}