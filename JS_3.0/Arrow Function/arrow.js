// normal function...

// test()

// function test()
// {
//     console.log("Hello World!!");
// }

// test()

// using Arrow Function -----------------------------

// const test = ()=>{
//     console.log("Hello World!!");
// }

// test()

// const add = (a , b)=>a + b;

// const sub = (a , b)=>a - b;

// const mul = (a , b)=>a * b;

// const div = (a , b)=>a / b;

// let result = add(100 , 20);

// let result1 = sub(100 , 20);

// let result2 = mul(100 , 20);

// let result3 = div(100 , 20);

// console.log("The Addition is :",result);

// console.log("The Subtraction is :",result1);

// console.log("The Multiplication is :",result2);

// console.log("The Division is :",result3);

// --------------------------------------------------------------------

function call()
{
    console.log("The call Function to be Called...");
}

function test(a)
{
    console.log(a);
}

// test("Hello")

// test(10)

// test(14.56)

// test(true)

// test([10 , 20 , 30])

test(call)

// test(call())