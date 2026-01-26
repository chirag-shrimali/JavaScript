alert('Calculating Electricity Bill for the Trafic Light Signal...')

let unit = parseInt(prompt('Enter the Units : '))

let bill_amount = 0;

if(unit >= 0 && unit < 101)
{
    bill_amount = 0;
    console.log("No Charges Occurs for the first 100 units...So,the Bill for your trafic light signal charges are : ",bill_amount,"/-");
}
else if(unit >= 101 && unit < 201)
{
    bill_amount = (unit - 100) * 5;
    console.log("You have to break a trafic light signal so that you have to fine Rs.",bill_amount,"/-")
}
else if(unit >= 201 && unit < 401)
{
    // bill_amount = (((unit - 200) * 10) + 100 * 5);
    bill_amount = 500 + (unit - 200) * 10; 
    console.log("You have to break a trafic light signal so that you have to fine Rs.",bill_amount,"/-")
}
else if(unit < 0)
{
    console.log('Invalid Units...Pls,select the valid units!!')
}
else
    {
    console.log("You are under arrest...")
}