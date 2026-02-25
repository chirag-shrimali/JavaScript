// using functions , four types we are finding the factorial of the given number by the user...

// 1. WOA and WOR

function fac1()
{
    let no = 5;

    let fc = 1;

    for(let i = 1;i <= no;i++)
    {
        fc = fc * i;
    }

    console.log("\nThe Factorial of",no,"number is :",fc);
}

fac1()

// ------------------------------------------------------------------

// 2. WA and WOR

function fac2(no)
{
    let fc = 1;

    for(let i = 1;i <= no;i++)
    {
        fc = fc * i;
    }

    console.log("\nThe Factorial of",no,"number is :",fc);
}

fac2(5)

// --------------------------------------------------------------------

// 3. WOA and WR

function fac3()
{
    let no = 5;

    let fc = 1;

    for(let i = 1;i <= no;i++)
    {
        fc = fc * i;
    }

    return fc;
}

console.log("\nThe Factorial is :",fac3());

// ----------------------------------------------------------------------

// 4. WA and WR

function fac4(no)
{
    let fc = 1;

    for(let i = 1;i <= no;i++)
    {
        fc = fc * i;
    }

    return fc;
}

console.log("\nThe Factorial is :",fac4(5));