let phy = parseInt(prompt("\nEnter the mark of physics : "));
let chem = parseInt(prompt("\nEnter the mark of chemistry : "));
let math = parseInt(prompt("\nEnter the mark of maths : "));
let bio = parseInt(prompt("\nEnter the mark of Biology : "));
let comp = parseInt(prompt("\nEnter the mark of Computer : "));

parseInt(console.log("\nTotal : ",phy + chem + math + bio + comp));
parseFloat(console.log("\nPercentage : ",(phy + chem + math + bio + comp)/5));

if((phy + chem + math + bio + comp)/5 > 90)
{
    console.log("\nA Grade.");
}
else if((phy + chem + math + bio + comp)/5 > 80)
{
    console.log("\nB Grade.");
}
else if((phy + chem + math + bio + comp)/5 > 70)
{
    console.log("\nC Grade.");
}
else if((phy + chem + math + bio + comp)/5 > 60)
{
    console.log("\nD Grade.");
}
else if((phy + chem + math + bio + comp)/5 > 50)
{
    console.log("\nE Grade.");
}
else if((phy + chem + math + bio + comp)/5 > 40)
{
    console.log("\nF Grade.Bro!You are consider to fail in the exam.");
}
else{
    console.log("\nInvalid marks of the subject.so,select valid marks of subject.");
}