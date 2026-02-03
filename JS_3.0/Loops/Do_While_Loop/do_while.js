// // print 1 to 10 number using do while loop -----------------------------------------------------------------------

// let i = 1;

// do{
//     console.log(i);

//     i++;
// }while(i <= 10);

// // printing reverse 10 to 1 numbers using do while loop -----------------------------------------------------

// let i = 10;

// do{
//     console.log(i);
    
//     i--;
// }while(i >= 1);

// // calculate the sum the number that enter by the user using do while loop ---------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let sum = 0;

// let i = 1;

// do{
//     console.log(i);
    
//     sum = sum + i; // sum += i;

//     i++;
// }while(i <= no);

// console.log("\nThe Sum of",no,"number are :",sum);

// // calculate the sum of even and odd number the number that enter by the user ---------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let oddSum = 0;

// let evenSum = 0;

// let i = 1;

// do{
//     if(i % 2 == 0)
//     {
//         evenSum += i; // evenSum = evenSum + i; // evenSum += i;
//     }
//     else{
//         oddSum += i;
//     }

//     i++;
// }while(i <= no);

// console.log("\nThe EvenNo Sum are :",evenSum);

// console.log("\nThe OddNo Sum are :",oddSum);

// // calculate the factorial the number that enter by the user using do while loop------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let i = 1;

// let fc = 1;

// do{
//     fc = fc * i; // fc *= i;

//     i++;
// }while(i <= no);

// console.log("\nThe Factorial of",no,"are :",fc);

// // calculate the power the number that enter by the user using do while loop ----------------------------------------

// let no = parseInt(prompt("\nEnter the No(Base) : "));

// let power = parseInt(prompt("\nEnter the Power : "));

// let m = 1;

// let i = 1;

// do{
//     m = m * no;

//     i++;
// }while(i <= power);

// console.log("\nThe Base",no,"Power",power,"are :",m);

// // Prime no or not using do while loop -----------------------------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let count = 0;

// let i = 1;

// do{ 
//     if(no % i == 0)
//     {
//         count++;
//     }
//     i++;
// }while(i <= no);

// if(count == 2)
// {
//     console.log(no,"is a Prime No...");
// }
// else{
//     console.log(no,"is not a Prime No...");
// }

// // Perfect no or not using do while loop -----------------------------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let sum = 0;

// let i = 1;

// do{ 
//     if(no % i == 0)
//     {
//         sum = sum + i; // sum += i;
//     }
//     i++;
// }while(i < no);

// if(no == sum)
// {
//     console.log(no,"is a Perfect No...");
// }
// else{
//     console.log(no,"is not a Perfect No...");
// }

// // Palindrome no or not using do while loop -----------------------------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let rev = 0;

// let rem = 0;

// let temp = no;

// do{ 
//     rem = no % 10;

//     rev = (rev * 10) + rem;

//     no = Math.floor(no / 10);
// }while(no > 0);

// if(rev == temp)
// {
//     console.log(temp,"is a Palindrome No...");
// }
// else{
//     console.log(temp,"is not a Palindrome No...");
// }

// // count the digits using do while loop --------------------------------------------------

// let no = parseInt(prompt("\nEnter the No : "));

// let temp = no;

// let count = 0;

// do{
//     no = Math.floor(no / 10);

//     count++;

// }while(no > 0);

// console.log("\nThe Total Digits of",temp,"are :",count);

// Armstrong no or not using do while loop -----------------------------------------------------

let no = parseInt(prompt("\nEnter the No : "));

let sum = 0;

let rem;

let temp = no;

do{
    rem = no % 10; // 153 % 10 == 3 // 15 % 10 == 5 // 1 % 10 == 1

    sum = sum + (rem * rem * rem); // 0 + 27 == 27 // 27 + 125 == 152 // 152 + 1 == 153

    no = Math.floor(no / 10); // 15 // 1 // 0

}while(no > 0);

if(temp == sum)
{
    console.log(temp,"is a Armstrong No...");
}
else{
    console.log(temp,"is not a Armstrong No...");
}