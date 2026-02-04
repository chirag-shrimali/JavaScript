// in the js the array in which the index value always starts with 0

//         0    1    2    3    4
// let arr = [10 , 50 , 63 , 78 , 45];

// console.log(arr); // print whole array elements

// console.log(arr[0]); // 10

// console.log(arr[4]); // 45

// console.log(arr[2]); // 63

// find the Maximum and Minimum value in the array list -----------------------------------------------------

//         0    1    2    3    4
let arr = [90 , 50 , 63 , 78 , 45];

let max = min = arr[0];

for(let i = 0;i < arr.length;i++)
{
    if(arr[i] > max)
    {
        max = arr[i];
    }
    if(arr[i] < min)
    {
        min = arr[i]
    }
}

console.log("\nThe Maximum Value is :",max);

console.log("\nThe Minimum Value is :",min);