// function getData()
// {
//     let promise = new Promise((resolve , reject)=>{ // created a object
//         setTimeout(()=>{
//             reject("Failed...");
//         },3000)
//     });

//     promise.catch((rej)=>{
//         console.log(rej);
//     });
// }

// getData();

const getData = ()=>
{
    let promise = new Promise((resolve , reject)=>{ // created a object
        setTimeout(()=>{
            // reject("Failed...");
            resolve("Success...");
        },3000)
    });

    // promise.catch((rej)=>{
    //     console.log(rej);
    // });
    promise.then((suc)=>{
        console.log(suc);
    })
}

getData();