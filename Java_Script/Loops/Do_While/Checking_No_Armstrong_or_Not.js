let no = parseInt(prompt("\nEnter the No : "));

// using for loops

let r;
let sum = 0;

let temp = no;

for(;temp > 0;)
{
    r = temp % 10;

    sum = sum + (r * r * r);

    temp = Math.floor(temp/10);
}
if(no == sum)
{
    console.log(no + " is an ArmStrong Number.");
}
else{
    console.log(no + " is not an ArmStrong Number.");
}