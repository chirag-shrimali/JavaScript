const Student = {
    Student_Roll_No : 21,
    Student_Name : 'Chirag',
    Student_Birth_Date : '04-Nov-2006',
    Student_Grade : 'A Grade',
    IsStudentAvailable : true,
    Student_Per : 97,
    Additional_Info : {
        Address : '96,RamShyam Soc. Vatva,Ahmedabad',
        Email : 'chiragshrimali2147@gmail.com',
        Valid_Phone_Number : ['9638527410','8796526389','7896583685','968578963645'],
        Gender : 'Male'
    }
};

// prints students data-information

console.log(Student);

console.log(typeof(Student));

console.log("-----------------------------------");

// console.log(Student.IsStudentAvailable);

console.log(Student.IsStudentAvailable ? "IsAvailable" : "IsNotAvailable");

// console.log(typeof Student.IsStudentAvailable);

console.log(typeof(Student.IsStudentAvailable));

console.log("-----------------------------------");

// console.log(typeof Student);

console.log(Student.Student_Roll_No);

// console.log(typeof Student.Student_Roll_No);

console.log(typeof(Student.Student_Roll_No));

console.log("-----------------------------------");

console.log(Student.Student_Name);

// console.log(typeof Student.Student_Name);

console.log(typeof(Student.Student_Name));

console.log("-----------------------------------");

console.log(Student.Additional_Info.Gender);

// console.log(typeof Student.Additional_Info.Gender);

console.log(typeof(Student.Additional_Info.Gender));

console.log("-----------------------------------");

console.log(Student.Additional_Info.Email);

// console.log(typeof Student.Additional_Info.Email);

console.log(typeof(Student.Additional_Info.Email));

console.log("-----------------------------------");

// console.log(Student.Additional_Info.Valid_Phone_Number[2]);

for(i = 0;i<Student.Additional_Info.Valid_Phone_Number.length;i++)
{
    console.log(Student.Additional_Info.Valid_Phone_Number[i]);
}