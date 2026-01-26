const addCart = ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let flag = true;
            if(flag)
            {
                resolve({
                    name:"apple",
                    price:300,
                    message:"Add to Cart",
                    status:200
                })
            }
            else{
                reject({
                    name:"apple",
                    price:200,
                    message:"Not to Add for cart",
                    status:400
                })
            }
        },3000)
    })
}

const getOrder = (data)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let flag = true;
            if(flag)
            {
                resolve({
                    product:data.name,
                    price:data.price,
                    message:"Order Successfully Placed...",
                    status:300
                })
            }
            else{
                reject({
                    // product:data.name,
                    // price:data.price,
                    message:"Order not Successfully Placed...",
                    status:500
                })
            }
        },4000)
    })
}

const getPayment = (option)=>{
    return new Promise((success , failure)=>{
        setTimeout(()=>{
            let flag = true;
            if(!flag)
            {
                failure({
                    message:"Payment Failed...",
                    status:250
                })
            }
            else{
                success({
                    product:option.product,
                    price:option.price,
                    message:"Payment Successfully Received...",
                    status:350
                })
            }
        },5000)
    })
}

addCart().then((data)=>{
    console.log("Added for the Cart...",data);

    getOrder(data).then((res)=>{
        console.log("Order received...",res);

    getPayment(res).then((res)=>{
        console.log("Payment Successfully Received...",res);
    }).catch((err)=>{
        console.log("Payment not received Successfully!!",err);
    })

    }).catch((err)=>{
        console.log("Order not received...",err);
    })

}).catch((err)=>{
    console.log("Error is founded...",err);
})