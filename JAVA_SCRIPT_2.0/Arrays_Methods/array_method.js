// Arrays are mutables means change can be occurs...

//                0          1         2          3          4
// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];
// Total Length = 5 and index starts with 0 and ends with 4(len - 1)

// console.log(student); // prints whole arrays string name

// console.log(student[2]); // Aniket

// console.log(student[0]); // Chirag

// console.log(student[10]); // undefined

// console.log(student[8] = "Ketan"); // Ketan prints in the index of 8

// console.log(student); // prints first 4 name of string then displays 3 empty and as a 8 index shows Ketan

// PUSH------------------------------------------------------------------------

// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];

// student.push("Suresh");

// console.log(student); // add at the last index string name Suresh after Vishwesh

// // POP------------------------------------------------------------------------

// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];

// student.pop(); // delete the strings name at the ends of the index size - 1 means (len - 1)

// console.log(student);

// SHIFT------------------------------------------------------------------------

// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];

// student.shift(); // delete the value of the strings from starting

// console.log(student);

// UNSHIFT------------------------------------------------------------------------

// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];

// student.unshift("Mukesh"); // add the value of string name from starting of the index at 0

// console.log(student);

// INDEXOF------------------------------------------------------------------------

// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];

// // 2 index value prints
// console.log(student.indexOf("Aniket")); // return the users the string index value if in the lists then prints index values of that string otherwise return -1

// console.log(student.indexOf('rahul')); // -1

// INCLUDES------------------------------------------------------------------------

// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];

// console.log(student.includes("Vishwesh")); // true return true if exists otherwise returns false

// console.log(student.includes('fenil')); // false

// Concatanation------------------------------------------------------------------------

// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];

// let no = [5 , 9 , 6 , 3 , 55];

// console.log(student.concat(no)); // add or merge the whole arrays items to the first one
// // prints like ['Chirag' , 'Rahul' , 'Aniket' , 'Fenil' , 'Vishwesh' , 5 , 9 , 6 , 3 , 55]

// Sorting Techinques--------------------------------------------------------------------

// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];

// let no = [5 , 9 , 55 , 6 , 3];

// // console.log(student.sort()); // in the increasing or ascending orders prints the student data

// console.log(no.sort()); // also prints increasing or ascending order the no data

// Sorting Techinques--------------------------------------------------------------------

// let student = ["Chirag" , 'Rahul' , "Aniket" , "Fenil" , 'Vishwesh'];

// console.log(student.reverse()); // reverse the array

// Slicing-----------------------------------------------------------------------------

//              0        1        2         3          4         5
let colors = ['pink' , 'red' , 'black' , "yellow" , "white" , "green"];

console.log(colors); // prints whole arrat items from index 0 to length ['pink' , 'red' , 'black' , 'yellow' , 'white' , 'green']

console.log(colors.slice(5)); // prints the items from the 5th index // ['green']

console.log(colors.slice(3)); // ['yellow' , 'white' , 'green']

// ['pink' , 'red' , 'black' , 'yellow' , 'white']
console.log(colors.slice(0,5)); // prints 0 to 5 but 5 excluded so, prints only 0 to 4 items list

console.log(colors.slice(-2 , -1)); // ['white']

console.log(colors.slice(-3)); // ['yellow' , 'white' , 'green']


