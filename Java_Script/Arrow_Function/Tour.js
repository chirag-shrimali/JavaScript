const dubai = (option)=>{
    console.log(option.fname + " you are having bugdet " + option.amount + " so you are eligible to go to Dubai.");
}

const paris = (option)=>{
    console.log(option.fname + " you are having bugdet " + option.amount + " so you are eligible to go to Paris.");
}

const london = (option)=>{
    console.log(option.fname + " you are having bugdet " + option.amount + " so you are eligible to go to London.");
}

const goa = (option)=>{
    console.log(option.fname + " you are having bugdet " + option.amount + " so you are eligible to go to Goa.");
}

let budget = 1000;
let temp;

if(budget > 4500)
{
    temp = dubai({fname:"Chirag" , amount:budget});
}
else if(budget > 3500)
{
    temp = paris({fname:"Chirag" , amount:budget});
}
else if(budget > 2500)
{
    temp = london({fname:"Chirag" , amount:budget});
}
else if(budget > 1500)
{
    temp = goa({fname:"Chirag" , amount:budget});
}
else{
    console.log("\nYou have not enough money to go any place.");
}

console.log(temp);