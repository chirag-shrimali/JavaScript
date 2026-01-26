let customer_size = prompt("Enter Your Size for buy a pop-corn : ")

if(customer_size.toUpperCase() == 'XL')
{
    console.log("You have to pay for the Pop-corn Rs.250");
}
else if(customer_size.toUpperCase() == 'L')
{
    console.log("You have to pay for the Pop-corn Rs.200");
}
else if(customer_size.toUpperCase() == 'M')
{
    console.log("You have to pay for the Pop-corn Rs.100");
}
else if(customer_size.toUpperCase() == "S")
{
    console.log("You have to pay for the Pop-corn Rs.50");
}
else{
    console.log("Invalid Size of customer!! So,write a valid size of a customers...")
}