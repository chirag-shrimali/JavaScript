let cp = parseInt(prompt("\nEnter the Cost Price : "));
let sp = parseInt(prompt("\nEnter the Selling Price : "));

if(sp >  cp)
{
    let profit = sp - cp;
    console.log("\n" + profit + " is a Profit.");
}
else if(cp > sp)
{
    let loss = cp - sp;
    console.log("\n" + loss + " is a Loss.");
}
else{
    console.log("\n" + " No Profit and No Loss.");
}