let choice = parseInt(prompt("\n1.Monday.\n2.Tuesday.\n3.Wednesday.\n4.Thursday.\n5.Friday.\n6.Saturday.\n7.Sunday.\nEnter Your Choice (1-7) : "));

switch(choice)
{
    case 1 : console.log("\nMonday.");
             break;
    case 2 : console.log("\nTuesday.");
             break;
    case 3 : console.log("\nWednesday.");
             break;
    case 4 : console.log("\nThursday.");
             break;
    case 5 : console.log("\nFriday.");
             break;
    case 6 : console.log("\nSaturday.");
             break;
    case 7 : console.log("\nSunday.");
             break;
    default : console.log("\nInvalid number's of days selection.so,Select Valid number of days.");
}