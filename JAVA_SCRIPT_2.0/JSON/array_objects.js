const student_info = [
    {
        name : "chirag" ,
        age : 19 ,
        city : "ahmedabad" ,
        marks : 99 ,
        email : "chirag123@gmail.com"
    },
    {
        name : "fenil" ,
        age : 18 ,
        city : "delhi" ,
        marks : 93 ,
        email : "fenil789@gmail.com"
    },  
    {
        name : "vishwesh" ,
        age : 20 ,
        city : "haryana" ,
        marks : 94 ,
        email : "vishwesh456@gmail.com"
    },
    {
        name : "shivam" ,
        age : 17 ,
        city : "punjab" ,
        marks : 90 ,
        email : "shivam147@gmail.com"
    }
];

console.log(Object.values(student_info).length); // 4

console.log(student_info); // it will be prints all the data or the information of student

console.log(student_info[0]); // it will be prints the index 0 all the data or information

console.log(student_info[3]); // it will be prints the index 3 all the data or the information

console.log(student_info[0].email); // index 0's email can be print

console.log(student_info[2].marks); // index 2's marks can be prints

console.log(student_info[3].name); // index 3's name can be prints

console.log(typeof(student_info)); // object

console.log(typeof student_info[0]); // object

console.log(typeof(student_info[3].marks)); // number or integer

console.log(typeof student_info[2].email); // string

console.log(student_info[0].phone_number = "123456"); // it will be adding the index 0's student phone number at the end of the array objects

console.log(student_info[0]); // the data or information can be adding at the end of the index 0's

console.log(student_info[2].age = "55"); // it will be updating the age of index 2's student

console.log(student_info[2]); // the data or the information of the student 2's can be updating

console.log(delete student_info[3].name); // it will be deleting the data or the information of the 3's index person

console.log(student_info[3]); // the student 3's name can be delete