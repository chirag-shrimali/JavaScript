const cricket = (information)=>{
    return information.fname + " You're selection is confirmed in Cricket with the amount of " + information.amount;
}

const football = (information)=>{
    return information.fname + " You're selection is confirmed in Football with the amount of " + information.amount;
}

const chess = (information)=>{
    return information.fname + " You're selection is confirmed in Chess with the amount of " + information.amount;
}

const sports = (choice , cb)=>{
    let x = cb(
        {
            fname : choice.fname ,
            amount : choice.budget
        }
    );
        console.log(x);
}

let firstname = "Chirag";
let budget = 2000;
let ans;

if(budget > 3500)
{
    ans = sports({fname:firstname , budget : budget} , cricket);
}
else if(budget > 2500)
{
    ans = sports({fname:firstname , budget : budget} , football);
}
else if(budget > 1500)
{
    ans = sports({fname:firstname , budget : budget} , chess);
}

console.log(ans);