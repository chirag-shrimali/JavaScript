// let string = prompt("Enter the String : ")

// let startWithA = string[0] === 'a';
// let endsWithZ = string[string.length - 1] === "z";

// if(startWithA && endsWithZ)
// {
//     console.log('Good String...')
// }
// else{
//     console.log("Bad String...")
// }

// let units = parseInt(prompt("Enter the Units : "))

// // 100 ---> 0
// // 101-200 ---> 5
// // 201-400 ---> 10

// let charge = 0;

// if(units > 0 && units <= 100)
// {
//     charge = 0;
//     console.log('Your Total Bill is :',charge);
// }
// else if(units > 100 && units <= 200)
// {   
//     charge = (units - 100) * 5;
//     console.log('Your Total Bill is :',charge);
// }
// else if(units > 200 && units <= 400)
// {
//     charge = 500 + ((units - 200) * 10);
//     console.log('Your Total Bill is :',charge);
// }

/*
take a input from the user of days
then 1 to 5 days Rs.2 charge
6 to 10 Rs.3
11 to 15 Rs.4
and 15 above Rs.5

----------------------------------------------
take a input of units from users
first 100 no charge
then 100 5 Rs. Charge
and next 200 10 Rs. Charge
*/

// let days = parseInt(prompt("Enter the Days : "))

// let charge = 0

// if(days > 0 && days <= 5)
// {
//     charge = days * 2;
// }
// else if(days > 5 && days <= 10)
// {
//     charge = (5 * 2) + ((days - 5) * 3);
// }
// else if(days > 10 && days <= 15)
// {
//     charge = (5 * 2) + (5 * 3) + ((days - 10) * 4);
// }
// else{
//     charge = (5 * 2) + (5 * 3) + (5 * 4) + ((days - 15) * 5);
// }

// console.log("The Charge is :",charge);