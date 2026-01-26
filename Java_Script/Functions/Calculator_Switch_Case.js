function add(a,b)
{
    // let a = parseInt(prompt("\nEnter the No1 : "));
    // let b = parseInt(prompt("\nEnter the No2 : "));
    let add = a + b;
    console.log("\nAddition : " + add);
}

function sub(a,b)
{
    // let a = parseInt(prompt("\nEnter the No1 : "));
    // let b = parseInt(prompt("\nEnter the No2 : "));
    let sub = a - b;
    console.log("\nSubtraction : " + sub);
}

function mul(a,b)
{
    // let a = parseInt(prompt("\nEnter the No1 : "));
    // let b = parseInt(prompt("\nEnter the No2 : "));
    let mul = a * b;
    console.log("\nMultiplication : " + mul);
}

function div(a,b)
{
    // let a = parseInt(prompt("\nEnter the No1 : "));
    // let b = parseInt(prompt("\nEnter the No2 : "));
    let div = a / b;
    console.log("\nDivision : " + div);
}

function rem(a,b)
{
    // let a = parseInt(prompt("\nEnter the No1 : "));
    // let b = parseInt(prompt("\nEnter the No2 : "));
    let rem = a % b;
    console.log("\nModulus(Remainder) : " + rem);
}

let choice = prompt("\nEnter Your Choice('+' , '-' , '*' , '/' , '%') : ");

let a = parseInt(prompt("\nEnter the No1 : "));
let b = parseInt(prompt("\nEnter the No2 : "));

switch(choice)
{
    case '+' : add(a,b);
               break;

    case '-' : sub(a,b);
               break;

    case '*' : mul(a,b);
               break;

    case '/' : div(a,b);
               break;

    case '%' : rem(a,b);
               break;

    default : console.log("\nInvalid choice selection.So,select the valid option.");
}