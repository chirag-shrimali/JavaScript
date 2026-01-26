var a = parseInt(prompt("\nEnter the No1 : "));
var b = parseInt(prompt("\nEnter the No2 : "));
var c = parseInt(prompt("\nEnter the No3 : "));

// bitwise and opearators
// if both conditions are satisfying then only it will return (1) -- true otherwise false (0)

// if(a > 35 && b > 35 && c > 35)
// {
//     console.log("\nThe Sum of Three Number : " , a + b + c);
// }

// else if(a > 35 && b > 35)
// {
//     console.log("\nThe Sum of Two Number : ",a + b);
// }

// else if(a > 35 && c > 35)
// {
//     console.log("\nThe Sum of Two Number : ",a + c);
// }

// else if(b > 35 && c > 35)
// {
//     console.log("\nThe Sum of Two Number : ",b + c);
// }

// else if(a > 35)
// {
//     console.log("\nThe Sum of One Number is : ",a);
// }

// else if(b > 35)
// {
//     console.log("\nThe Sum of One Number is : ",b);
// }

// else if(c > 35)
// {
//     console.log("\nThe Sum of One Number is : ",c);
// }

// else{
//     console.log("\nInvalid Number Selection,Select Valid Number!!");
    
// }

// other methds that's solve this tasks in short ways

let sum = 0;

if(a > 35)
{
    sum = sum + a; // sum + = a;
}
if(b > 35)
{
    sum = sum + b; // sum += b;
}
if(c > 35)
{
    sum = sum + c; // sum += c;
}

console.log("\nThe Sum is : " + sum);

//-------------------------------------------------------------------------------------------

// let username = prompt("\nEnter the User_Name : ");

// let susername = "Chirag Shrimali";

// let password = "Chirag@0411";

// if(username == susername)
// {
//     console.log("\nThe Password is :" , password);
//     console.log("\nThe Length of it's password is :",password.length);
// }
// else{
//     console.log("\nInvalid User_Name.Choose valid username.");
// }