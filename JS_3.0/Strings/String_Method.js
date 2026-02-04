// in the java script write the different different methods of the string

// // UpperCase ------------------------------------------------------------------------------------

// let nameStr = prompt("\nEnter the String Name : ");

// let upperCase = nameStr.toUpperCase();

// console.log(upperCase);

// // LowerCase -----------------------------------------------------------------------------------------

// let nameStr1 = prompt("\nEnter the String Name : ");

// let lowerCase = nameStr1.toLowerCase();

// console.log(lowerCase);

// // startsWith and endsWith ----------------------------------------------------------------------------------------------

// let nameStr = "Chirag Shrimali"

// console.log(nameStr.startsWith("Ch")) // true 

// console.log(nameStr.startsWith("h")) // false

// console.log(nameStr.startsWith("Ci")) // false

// console.log(nameStr.endsWith("i")) // true 

// console.log(nameStr.endsWith("l")) // false

// console.log(nameStr.endsWith("ai")) // false

// trim , trimend , trimstart -------------------------------------------------------------------------

let nameStr = "    Chirag Shrimali  ";

let tr = nameStr.trim();

console.log(tr); // Chirag Shrimali

console.log(tr.length); // 15

let trsta = nameStr.trimStart();

console.log(trsta); // Chirag Shrimali  

console.log(trsta.length); // 17

let trend = nameStr.trimEnd();

console.log(trend); //     Chirag Shrimali 

console.log(trend.length); // 19