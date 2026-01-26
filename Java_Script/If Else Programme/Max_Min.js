let a = parseInt(prompt("\nEnter the No1 : "));
let b = parseInt(prompt("\nEnter the No2 : "));
let c = parseInt(prompt("\nEnter the No3 : "));

let max , min;
// let max;
// let min;

if(a > b && a > c)
{
    max = a;
}
else if(b > a && b > c)
{
    max = b;
}
else{
    max = c;
}

if(a < b && a < c)
{
    min = a;
}
else if(b < a && b < c)
{
    min = b;
}
else{
    min = c;
}

console.log("\nThe Maximum Value is : ", max);
console.log("\nThe Minimum Value is : ", min);