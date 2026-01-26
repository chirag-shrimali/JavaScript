let age = parseInt(prompt("Enter Your Age : "));
let membership_status = prompt("Enter Your Membership Status : ");

if(age > 18)
{
    if(membership_status.toLowerCase() == 'true')
    {
        console.log("The Ticket Price is $12...");
    }
    else{
        console.log('The Ticket Price is $20...');
    }
}
else{
    if(membership_status.toLowerCase() == 'true')
    {
        console.log("The Ticket Price is $8...");
    }
    else{
        console.log("The Ticket Price is $10...");
    }
}