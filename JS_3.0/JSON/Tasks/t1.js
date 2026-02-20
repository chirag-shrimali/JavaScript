var data = [
    {
        name:"Google",
        employees:[
            {
                id:101,
                name:"Sundar pichay",
                post:"CEO",
                salary:123
            },
            {
                id:102,
                name:"Larry Page",
                post:"Founder",
                salary:190
            },
            {
                id:103,
                name:"Sergey Brin",
                post:"Founder",
                salary:180
            }
        ]
    },
    {
        name:"Facebook",
        employees:[
            {
                id:1001,
                name:"Mark",
                post:"CEO",
                salary:145
            },
            {
                id:1005,
                name:"Zuke",
                post:"Founder",
                salary:180
            }
        ]
    },
]

// let result = data.find((emp)=>emp.name == "Google").employees

// console.log(result);

// ---------------------------------------------------------------------------

// let result = data.find((emp)=>emp.name == "Facebook").employees

// console.log(result);

// ----------------------------------------------------------------------------

// let result = data.find((emp)=>emp.name == "Facebook").employees.reduce((a , b)=> a + b.salary , 0);

// console.log(result);

// -----------------------------------------------------------------------------

// let result = data.flatMap((emp)=>emp.employees).map((e)=>e.name);

// console.log(result);

// ----------------------------------------------------------------------------

// let result = data.find((emp)=>emp.name == "Google").employees.reduce((a , b)=> a + b.salary , 0);

// console.log(result);

// ----------------------------------------------------------------------------

// let result = data.find((emp)=>emp.name == "Facebook").employees.map((e)=>e.id);

// console.log(result);

// ----------------------------------------------------------------------------

let result = data.map((emp)=>emp.employees).reduce((a , b)=>a + b.length , 0);

console.log(result);