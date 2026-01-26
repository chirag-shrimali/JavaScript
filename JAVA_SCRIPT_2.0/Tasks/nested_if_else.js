let a = parseInt(prompt("Enter the No1 : "))
let b = parseInt(prompt("Enter the No2 : "))
let c = parseInt(prompt("Enter the No3 : "))

if(a > b)
{
    if(a > c)
    {
        console.log("A is Larger No...")
    }
    else{
        console.log("C is Larger Number...")
    }
}
else{
    if(b > c)
    {
        console.log("B is Larger No...")
    }
    else{
        console.log("C is Larger No...")
    }
}