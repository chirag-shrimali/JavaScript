const getsubmit = () =>{
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("Message");

    const getmessage = {
        name:name.value,
        email:email.value,
        message:message.value
    }

    const serviceID = "service_0iwygxw";
    const templeteID = "template_0x7o1in";

    emailjs.send(serviceID , templeteID , getmessage).then((res)=>{
        console.log(res)
    }).catch((cat)=>{
        console.log(cat)
    })
}