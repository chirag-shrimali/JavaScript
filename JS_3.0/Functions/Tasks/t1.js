// using functions four types we are finding that given number is positive or not...

// 1.WOA and WOR

// function no()
// {
//     let no = 10;

//     if(no > 0)
//     {
//         console.log("Positive No...");
//     }
//     else{
//         console.log("Negative No...");   
//     }
// }

// no()

// -----------------------------------------------------------------------------------------

// 2.WA and WOR

// function no(no)
// {
    
//     if(no > 0)
//     {
//         console.log("Positive No...");
//     }
//     else{
//         console.log("Negative No...");   
//     }
// }

// no(10)

// -----------------------------------------------------------------------------------------

// 3.WOA and WR

// function no()
// {
//     let no = -10;

//     if(no > 0)
//     {
//         return true;
//     }
//     else{
//         return 0;   
//     }
// }

// console.log("\nThe Number is :",no());

// -----------------------------------------------------------------------------------------

// 4.WOA and WR

function no(no)
{
    if(no > 0)
    {
        return true;
    }
    else{
        return 0;   
    }
}

let result = no(10)

if(result > 0)
{
    console.log("Positive No...")
}
else{
    console.log("Negative No...");
}

console.log("\nThe Number is :",result);