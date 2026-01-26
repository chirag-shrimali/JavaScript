// // synchronous --- squence
// console.log("First");
// console.log('Second');

// setTimeout(()=>console.log('Hello!!'), 2000); // setTimeout function can show the value after nms 2000ms = 2s

// console.log("Third");
// console.log('Fourth');

// function sum(a , b)
// {
//     console.log(a + b);
// }

// function calculator(a , b , sumcb)
// {
//     sumcb(a , b);
// }

// calculator(3 , 6 , (x , y)=>console.log(x + y));

const hello = ()=>{
    console.log("hello!!");
}

setTimeout(hello , 2000);