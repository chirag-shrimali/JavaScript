// Task-1-->PRINT EACH ELEMENTS OF AN ARRAY

// Task-2-->COUNT THAT HOW MANY NUMBERS ARE GREATER THAN 50

// Task-3-->PRINT ONLY EVEN NO

// Task-1---------------------------------------------------------------

// let arr = [21 , "Chirag" , 55.56 , true];

// for(let i = 0;i < arr.length;i++)
// {
//     console.log(arr[i]);
// }

// Task-2----------------------------------------------------------------

// let arr = [1 , 90 , 6 , 9 , 55 , 36 , 78 , 60 , 25 , 49 , 51 , 99];

// let count = 0;

// for(let i = 0;i< arr.length;i++)
// {
//     if(arr[i] > 50)
//     {
//         console.log(arr[i]);
//         count++; // count = count + 1
//     }
// }

// console.log("\nThe Numbers which are greater than 50 is :",count);

// Task-3----------------------------------------------------------

// let arr = [58 , 8 , 7 , 6 , 33 , 45 , 34];

// for(let i = 0;i < arr.length;i++)
// {
//     if(arr[i] % 2 == 0)
//     {
//         console.log(arr[i]);
//     }
// }

const student = {
    name : "Chirag" ,
    age : 19 , 
    email : 'chirag123@gmail.com' ,
    phoneno : 7896455 ,
    address : "ahmedabad" ,
    hobby : ['Cricket' , "Music" , 'Coding' , "Learning"] ,
    married : false
};

console.log(student); // prints whole object of student
console.log(student["email"]); // chirag123@gmail.com
console.log(student.hobby); // ['Cricket' , 'Music' , 'Coding' , 'Learning']
console.log(student["age"]); // 19
console.log(student.address); // ahmedabad
console.log(student["married"]); // false
console.log(student.address = "Rajkot"); // update the data in the json object
console.log(student); // prints whole object of student
console.log(student["age"] = 25); // update the data in the json object
console.log(student); // prints whole object of student
console.log(student.gender = "male"); // add the data in the json object
console.log(student); // prints whole object of student
console.log(student["marks"] = 99); // add the data in the json object
console.log(student); // prints whole object of student
console.log(typeof(student)); // object
console.log(typeof student["email"]); // string
console.log(typeof(student["phoneno"])); // int --> number