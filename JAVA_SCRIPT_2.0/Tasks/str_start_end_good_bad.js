let string = prompt("Enter Your String : ")

let startsWithA = string[0] === 'a';

let endsWithZ = string[string.length - 1] === 'z';

if(startsWithA || endsWithZ)
{
    console.log('Is a Good String...');
}
else{
    console.log("Is a Bad String...")
}