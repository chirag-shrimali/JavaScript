let no_of_days = parseInt(prompt("Enter the days : "))

let charge = 0;

if(no_of_days <= 5)
{
    // console.log("Your Library Charge is Rs.2/day...")
    charge = no_of_days * 2;
    console.log("Total Library Charge is : ",charge);
}
else if(no_of_days > 5 && no_of_days <= 10)
{
    // console.log("Your Library Charge is Rs.3/day...")
    charge = (5 * 2) + ((no_of_days - 5) * 3);
    console.log("Total Library Charge is : ",charge);
}
else if(no_of_days > 10 && no_of_days <= 15)
{
    // console.log("Your Library Charge is Rs.4/day...")
    charge = (5 * 2) + (5 * 3) + ((no_of_days - 10) * 4);
    console.log("Total Library Charge is : ",charge);
}
else if(no_of_days > 15)
{
    // console.log("Your Library Charge is Rs.5/day...")
    charge = (5 * 2) + (5 * 3) + (5 * 4) + ((no_of_days - 15) * 5);
    console.log("Total Library Charge is : ",charge);
}
else if(no_of_days < 0)
{
    console.log("Invalid numbers of days!! So,select the valid numbers of days...")
}