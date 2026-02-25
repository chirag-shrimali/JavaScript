/*
In the Function, basically there are having 4 types of functions :-
1. WOA and WOR
2. WA and WOR
3. WOA and WR
4. WA and WR
*/

// 1. WOA and WOR

function add()
{
    let a = 100 , b = 50 , c;

    c = a + b;

    console.log("\nThe Addition of two numbers are :",c);
}

add()

// ------------------------------------------------------------------

// 2. WA and WOR

function sub(a , b)
{
    let c;

    c = a - b;

    console.log("\nThe Subtraction of two numbers are :",c);
}

sub(100 , 50)

// --------------------------------------------------------------------

// 3. WOA and WR

function mul()
{
    let a = 100 , b = 50 , c;

    c = a * b;

    return c;
}

console.log("\nThe Multiplication of Two numbers are :",mul());

// ----------------------------------------------------------------------

// 4. WA and WR

function div(a , b)
{
    let c;

    c = a / b;

    return c;
}

console.log("\nThe Division of Two numbers are :",div(100 , 50));