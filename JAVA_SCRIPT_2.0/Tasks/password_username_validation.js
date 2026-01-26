let username = prompt("Enter Your UserName : ");
let password = prompt('Enter Your Password : ');

username1 = "Chirag Shrimali";
password1 = "Chirag@0411";

if(username == username1)
{
    if(password == password1)
    {
        console.log("Login Successfully!!");
    }
    else{
        console.log('Invalid Password!! Write a valid Password...');
    }
}
else{
    if(password == password1)
    {
        console.log("Invalid UserName!! Write a Valid UserName...");
    }
    else{
        console.log('Invalid Password & Username!! So,write a Valid Password & UserName...');
    }
}