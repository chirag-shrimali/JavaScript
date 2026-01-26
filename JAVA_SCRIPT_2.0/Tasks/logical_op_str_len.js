let string = prompt("Enter Your String : ")

let startsWithA = string[0] === 'a';

if(startsWithA && string.length > 3)
{
    console.log("Is a Good String...");
}
else{
    console.log('is a Bad String...')
}