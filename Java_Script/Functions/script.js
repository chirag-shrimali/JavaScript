// console.log("\nHello World!!");

// let x = "chirag".toUpperCase();

// console.log(x);

// let y = "CHIRAG".toLowerCase();

// console.log(y);

// let z = [1,2,3].push(4);

// console.log(z);

// let a = "Chirag".concat(' Shrimali');

// console.log(a);

// The Area of Circles A = 3.14 * r * r;

// The Circumstances of Circle are P = 2 * 3.14 * r;

// The Area of Rectangular A = l * w;

// The Circumstances of Rectangular are P = 2(l * b + b * h + h * l);

// The Area of Squares A = l * l;

// The Circumstances of Squares are P = 4 * l;

// The Area of Triangular A = 0.5 * w * b

// function triangular(w,b)
// {
//     return 0.5 * w * b;
// }

// let w = prompt("\nEnter the Width : ");

// let b = prompt("\nEnter the Breath : ");

// let area = console.log("\nThe Area is : " + triangular(w,b));

// let upp = "chirag".toUpperCase();

// console.log(upp);

// let low = "CHIRAG".toLowerCase();

// console.log(low);

// let ans = [1 , 2 , 3 , 4].push(5);

// console.log(ans);

//-------------------------------------------------------------------------------------------

// arrow function -- modern java script for addition

// function sum(a , b)
// {
//     return a + b;
// }

// console.log(sum(1,2));

// const arrowsum = (a , b) => {
//     console.log(a + b);
// }

// arrowsum(1,4);

// arrow function for multiplication

// function mul(a , b)
// {
//     return a * b;
// }

// console.log(mul(5,6));

// const arrowmul = (a , b) => {
//     console.log(a * b);
// };

// // console.log(arrowmul(1,2));

// // console.log(arrowmul(2,3));

// arrowmul(4,5);

// task - 1 using function keywords

// let vowels = 0;
// let consonants = 0;

// function countvowels(username)
// {
//     for(let i = 0;i<username.length;i++)
//     {
//         let ch = username.charAt(i);
//         if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
//         {
//             vowels++;
//         }
//         else{
//             consonants++;
//         }
//     }
//         return vowels;
// }

// let username = prompt("\nEnter the Name : ");

// console.log("\nThe Vowels are : ", countvowels(username));

// using arrow functions keywords

    let count = 0;

const countvowel = (str) => {
    for(const char of str)
    {
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char =='u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char =='U')
        {
            count++;
        }
    }
        return count;
}

// let str = prompt("\nEnter the Name : ");

// console.log("The Vowels are : " , countvowel(str));