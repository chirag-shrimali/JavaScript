let a = parseInt(prompt("\nEnter the No1 : "));
let b = parseInt(prompt("\nEnter the No2 : "));

let choice = parseInt(prompt("\n1.Addition.\n2.Subtrction.\n3.Multiplication.\n4.Division.\n5.Modulus.\nEnter Your Choice : "));

switch(choice)
{
    case 1 : console.log("\nAddition : ",a + b);
             break;

    case 2 : console.log("\nAddition : ",a - b);
             break;

    case 3 : console.log("\nAddition : ",a * b);
             break;

    case 4 : console.log("\nAddition : ",a/b);
             break;

    case 5 : console.log("\nAddition : ",a%b);
             break;

    default : console.log("\nInvalid Choice,Select Valid Option.");
}