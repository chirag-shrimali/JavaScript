// Tasks of Reduce

// let salary = [10000 , 2000 , 3000 , 40000];

// let newSalary = salary.map((a)=>a + 1000);

// console.log(salary);

// console.log(newSalary);

// ------------------------------------------------------------------

let salary = [10000 , 2000 , 3000 , 40000];

let newSalary = salary.reduce((a , b)=>{
    a.push(b + 1000);

    return a;
} , []);

console.log(salary);

console.log(newSalary);