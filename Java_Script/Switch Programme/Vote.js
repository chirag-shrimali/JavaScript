const age = 85;

switch(true)
{
    case age >= 18 && age <= 80 : 
             console.log("\nYou are eligible to give for vote.");
             break;
    
    case age < 18 :
             console.log("\nYou are not eligible to give for vote.");
             break;
            
    default : console.log("\nInvalid age.so,you can select valid age.");
}