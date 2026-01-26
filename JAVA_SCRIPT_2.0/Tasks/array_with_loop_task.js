//               0         1         2          3        4         5
let fruits = ["Mango" , "Apple" , "Banana" , "Lichi" , "Kivi" , "Orange"];

fruits.push("Watermelon"); // adding the items at the end of the array at 6th index

fruits.reverse();

for(let i = 0;i < fruits.length;i++)
{
    console.log("\t",i,fruits[i]);
}