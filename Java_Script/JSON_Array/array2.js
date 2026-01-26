var company = [
    {
        name: "google",
        employees:[
            {
                id:101,
                name:"meet desai",
                salary:25600,
                email:"meet@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:102,
                name:"jane",
                salary:22000,
                email:"jane@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:103,
                name:"priti",
                salary:27800,
                email:"priti@gmail.com",
                IsMarried:true,
                child:2,
                gender:"female"
            }
        ]
    },
    {
        name:"facebook",
        employees:[
            {
                id:201,
                name:"jim",
                salary:24500,
                email:"jim@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:202,
                name:"sarah",
                salary:21500,
                email:"sarah@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:203,
                name:"akash",
                salary:26200,
                email:"akash@gmail.com",
                IsMarried:true,
                child:2,
                gender:"male"
            }
        ]
    },
    {
        name:"amazon",
        employees:[
            {
                id:301,
                name:"ankit",
                salary:26200,
                email:"ankit@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            },
            {
                id:302,
                name:"riya",
                salary:86000,
                email:"riya@gmail.com",
                IsMarried:true,
                child:1,
                gender:"female"
            },
            {
                id:303,
                name:"kriti",
                salary:62500,
                email:"kriti@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            }
        ]
    },
    {
        name:"flipkart",
        employees:[
            {
                id:401,
                name:"pooja",
                salary:29800,
                email:"pooja@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:402,
                name:"ritesh",
                salary:22500,
                email:"ritesh@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:403,
                name:"bhuwan",
                salary:28700,
                email:"bhuwan@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            }
        ]
    }
    
]

//  1. Find the total number of employees in all companies.

// let ans = company.reduce((count , comp)=>
// {
//     return count + comp.employees.length
// } , 0);

// console.log(ans);

// 2. Find the company where the employee named "riya" works.

// let ans = company.find((comp)=>comp.employees.find((emp)=>emp.name === "jim"))

// console.log(ans.name);

// let ans = company.find(com =>
//     com.employees.find(emp => emp.name === "riya")
// );

// console.log(ans.name);

// 3. Calculate the average salary of employees across all companies.

// let ans = company.map((comp)=>
// {
//     return comp.employees.reduce((total , emp)=>
//     {
//         return total + emp.salary / 3
//     } , 0)
// })

// console.log(ans);

// let ts = 0;
// let te = 0;

// for(let i = 0;i < company.length;i++)
// {
//     for(let j = 0;j<company[i].employees.length;j++)
//     {
//         ts = company[i].employees[j].salary;
//         te++;
//     }
// }

// let as = ts / te;

// console.log(as);

// 4. Find the names of all employees who are married.

// let ans = company.map((comp)=>
// {
//     return comp.employees.filter((emp)=>{
//         return emp.IsMarried === true
//     })
// })

// console.log(ans);

// company.forEach((comp)=>
// {
//     comp.employees.forEach((emp)=>
//     {
//         if(emp.IsMarried == true)
//         {
//             console.log(emp.name)
//         }  
//     })
// });

// let ans = company.map((comp)=>
// {
//     return comp.employees.filter((emp)=>
//     {
//         return emp.IsMarried;
//     }).map(emp => emp.name);
// });

// console.log(ans.flat());

// 5. Count the total number of children across all employees

// let ans = company.map((comp)=>comp.employees.reduce((total , emp)=>total + emp.child , 0)).reduce((total , emp)=>emp + total , 0)

// console.log(ans);

// let ans = company.map((com)=>com.employees.reduce((sum , emp)=>sum + emp.child , 0)).reduce((total , emp)=> emp + total , 0);

// console.log(ans);

// 7. List all female employees.

// let ans = company.map((comp)=>
// {
//     return comp.employees.filter((emp)=>
//     {
//         return emp.gender === "female"
//     }).map((emp)=>
//     {
//         return emp.name
//     })
// })

// console.log(ans.flat());

// let ans = company.map((com)=> com.employees.filter((emp)=>emp.gender === "female").map(emp => emp.name));

// console.log(ans.flat());

// 8. Count how many employees are not married.

// let ans = company.map((comp)=>
// {
//     return comp.employees.filter((emp)=>
//     {
//         return emp.IsMarried == false
//     }).map((emp)=>
//     {
//         return emp.name
//     })
// })

// console.log(ans.flat().length);

// let ans = company.map((com)=>com.employees.filter((emp)=>!emp.IsMarried).map(emp => emp.name));

// console.log(ans.flat().length);

// 9. Find the email addresses of all employees earning more than 30,000.

// let ans = company.map((com)=>com.employees.filter((emp)=>emp.salary > 30000).map(emp => emp.email));

// console.log(ans.flat());

// let ans = company.map((comp)=>
// {
//     return comp.employees.filter((emp)=>
//     {
//         return emp.salary > 30000
//     }).map((emp)=>
//     {
//         return emp.email
//     })
// })

// console.log(ans.flat());

// 10. Identify the total number of employees for each company.

let ans = company.map((comp)=>
{
    return comp.employees.reduce((total , emp)=>
    {
        return total + 1
    } , 0)
})

console.log(ans);

// let ans = company.map(comp => comp.name + "-" + comp.employees.length);

// console.log(ans);