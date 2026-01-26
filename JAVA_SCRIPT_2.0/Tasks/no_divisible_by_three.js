let no = parseInt(prompt('Enter the No : '))

if(no % 3 == 0 && ((no == (10 + 2)) || (no == (20 - 8)))) // 12
{
    console.log(no,'is a Correct No...')
}
else{
    console.log(no,"is a Wrong No...")
}