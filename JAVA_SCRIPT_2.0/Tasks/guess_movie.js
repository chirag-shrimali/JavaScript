let movie = "Dhurandhar";

let count = 0;

while(count != 5)
{
    let guess = prompt("Enter My Favourite Movie Name : ");

    if(guess == "quit")
    {
        console.log("Quit");
        break;
    }

    if(movie != guess)
    {
        alert("Wrong Guess!!Enters a valid movie name to guess!!");
    }
    else{
        console.log("Congratulations!! You have guess the correct movie name!!");
        break;
    }
    count++;
}