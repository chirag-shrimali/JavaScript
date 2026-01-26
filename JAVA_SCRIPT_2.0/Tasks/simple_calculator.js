let no1 = parseInt(prompt("Enter the No1 : "));
let no2 = parseInt(prompt("Enter the No2 : "));

let choice = parseInt(prompt("\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Remainder\n6. Power\n7. Exit\n\nEnter Your Choice : "));

switch(choice)
{
    case 1 : console.log("Addition :",(no1 + no2));
             break;

    case 2 : console.log("Subtraction :",(no1 - no2));
             break;

    case 3 : console.log("Multiplication :",(no1 * no2));
             break;

    case 4 : console.log("Division :",(no1 / no2));
             break;

    case 5 : console.log("Remainder :",(no1 % no2));
             break;

    case 6 : console.log("Power :",(no1 ** no2));
             break;

    case 7 : console.log('Exiting Successfully!!!')
             break;
        
    default :
            console.log("Invalid Choice of selection!!!So,select the valid options of choice...")
}