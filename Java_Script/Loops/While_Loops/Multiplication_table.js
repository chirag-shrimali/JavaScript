// printing 19 multiplication tables

// let i = 19;

// while(i<=190)
// {
//     console.log(" " + i);
//     i = i + 19; // i+ = 19;
// }

// for(let i = 19;i<=190;i=i+19)
// {
//     console.log(i);
// }

// -------------------------------------------------------------------------------------------

// users enters any 'n' numbers and printing it's multiplication tables

// multiplication table using while loops

let no = parseInt(prompt("\nEnter the numbers that you want to find it's multiplication table :"));

let i = 1;
while(i<=10)
{
    console.log(no + " * " + i + " = " + (no * i));
    i++;
}