const student_info = {
    chirag : {
        age : 19 ,
        city : "ahmedabad" ,
        marks : 99 ,
        email : "chirag123@gmail.com"
    },
    fenil : {
        age : 18 ,
        city : "delhi" ,
        marks : 93 ,
        email : "fenil789@gmail.com"
    },  
    vishwesh : {
        age : 20 ,
        city : "haryana" ,
        marks : 94 ,
        email : "vishwesh456@gmail.com"
    },
    shivam : {
        age : 17 ,
        city : "punjab" ,
        marks : 90 ,
        email : "shivam147@gmail.com"
    }
};

console.log(Object.values(student_info).length); // 4

console.log(student_info); // prints all nested json object array

console.log(student_info.chirag); // prints in the array all the information of chirag

console.log(student_info.shivam); // prints in the array all the information of shivam

console.log(student_info.vishwesh.email); // prints the vishwesh email

console.log(student_info.fenil.age); // prints fenil age

console.log(student_info["chirag"]["marks"]); // prints the marks of chirag

console.log(student_info["shivam"].city); // prints shivam city

console.log(typeof(student_info)); // object

console.log(typeof student_info.shivam); // object

console.log(typeof(student_info.vishwesh.marks)); // number or integer

console.log(typeof student_info["fenil"].email); // string

console.log(student_info.chirag.phonenumber = "123456"); // it will be adding the phonenumber information at the end of the chirag json array object

console.log(student_info.chirag); // at the last phonenumber will be add

console.log(student_info.fenil.age = 19); // it will be updating the age of fenil 18 to 19

console.log(student_info.fenil); // at the information data of fenil the age will be updated

console.log(delete student_info.shivam.city); // it will be deleting the data or informtaion of shivam

console.log(student_info.shivam); // at the information of shivam city will be deleted