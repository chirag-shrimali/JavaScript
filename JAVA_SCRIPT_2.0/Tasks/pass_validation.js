let pass = prompt('Enter Your Password : ')

// let flag = false;

// for(let i = 0;i < pass.length ;i++)
// {
//     if(pass[i] == "@")
//     {
//         flag = true;
//         break;
//     }
// }

// if(pass.length >= 8 && flag)
// {
//     console.log(pass,"is a Valid Password...");
// }
// else{
//     console.log(pass,"is not a Valid(Invalid) Password...");
// }

if(pass.length >= 8 && pass.includes('@'))
{
    console.log(pass,"is a Valid Password...");
}
else{
    console.log(pass,"is not a Valid(Invalid) Password...");   
}