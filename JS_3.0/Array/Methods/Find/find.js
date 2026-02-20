// in the array there are having the methods which can be known as find...

//            0          1          2         3          4

// let data = ["Rahul" , "Chirag" , "Ketan" , "Ramesh" , "Suresh"];

// console.log(data);

// let result = data.find((a)=>a == "Ramesh"); // if in the data name are there it will be return that name otherwise undefined...

// console.log(result);

// --------------------------------------------------------------------------------------------

// let data = [4 , 10 , 20 , 63 , 40];

// console.log(data);

// let result = data.find((a)=>a > 20); // it will be return the first data items which will be satisfying the conditions....

// console.log(result);

// ----------------------------------------------------------------------------------------------

let emp = [
    {
        name : "Chirag" , age : 19 , city : "ahmedabad"
    } ,

    {
        name : "Rahul" , age : 25 , city : "delhi"
    }
];

// console.log(emp);

// let result = emp.find((a)=>a.name.length == 6);

let result = emp.find((a)=>a.age > 20);

console.log(result);