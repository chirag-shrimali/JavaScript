/*
C - 0
h - 1
i - 2
r - 3
a - 4
g - 5
*/

// copy the string ----------------------------------------------------------------------------------------

// let nameStr = prompt("\nEnter the String Name : ");

// copyStr = "";

// let i = 0;
// // 0 6
// while(i < nameStr.length)
// {
//     copyStr = nameStr[i];
 
//     console.log(copyStr);

//     i++;
// }

// let nameStr = prompt("\nEnter the String Name : ");

// copyStr = "";

// let i = 0;
// // 0 6
// while(i < nameStr.length)
// {
//     copyStr = nameStr;

//     i++;
// }

// console.log(copyStr);

// Reversing the String --------------------------------------------------------------------------------------

let nameStr = prompt("\nEnter the String Name : ");

revStr = "";

let i = nameStr.length - 1;
// 0 6
while(i >= 0)
{
    revStr = nameStr[i];
 
    console.log(revStr);

    i--;
}