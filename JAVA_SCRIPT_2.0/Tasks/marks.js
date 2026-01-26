marks = parseInt(prompt("Enter the Marks of Student : "))

if(marks >= 95)
{
    console.log("You are achieving A Grades...")
}
else if(marks >= 75)
{
    console.log("You are achieving B Grades...")
}
else if(marks >= 55)
{
    console.log("You are achieving C Grades...")
}
else if(marks >= 33)
{
    console.log("You are achieving D Grades...")
}
else if(marks < 0)
{
    console.log('Invalid Marks!! Please select the valid marks...')
}
else{
    console.log('You Become fail!! So,better luck next time...')
}
