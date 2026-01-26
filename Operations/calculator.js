no1 = parseInt(prompt('Enter the No1 : '))
no2 = parseInt(prompt('Enter the No2 : '))

choice = parseInt(prompt('\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Remainder \n6. Power\nEnter Your Choice : '))

switch(choice)
{
        case 1 : console.log("\nAddition : ",no1 + no2);
                 break;

        case 2 : console.log("\nSubtraction : ",no1 - no2);
                 break;

        case 3 : console.log("\nMultiplication : ",no1 * no2);
                 break;

        case 4 : console.log("\nDivison : ",no1 / no2);
                 break;

        case 5 : console.log("\nRemainder : ",no1 % no2);
                 break;

        case 6 : console.log("\nPower : ",no1 ** no2); // no1 ** no2
                 break;

        default : console.log('Invalid Choices Of Selection!!!Select the Valid Choice!!!')
}
        
// fname = 'Chirag'
// lname = "Shrimali"

// fullname = fname + " " + lname

// alert("Welcome...!" + fullname)