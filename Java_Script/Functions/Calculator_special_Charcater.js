function add()
{
}

function sub()
{
}

function mul()
{
}

function div()
{
}

function rem()
{
}

let choice = prompt("\nEnter Your choice : ");

if(choice == '+')
{
    add();
    let a = parseInt(prompt("\nEnter the No1 : "));
    let b = parseInt(prompt("\nEnter the No2 : "));
    let ans = a + b;
    console.log("Addition : " + ans);
}
else if(choice == '-')
{
    sub();
    let a = parseInt(prompt("\nEnter the No1 : "));
    let b = parseInt(prompt("\nEnter the No2 : "));
    let ans = a - b;
    console.log("Subtraction : " + ans);
}
else if(choice == '*')
{
    mul();
    let a = parseInt(prompt("\nEnter the No1 : "));
    let b = parseInt(prompt("\nEnter the No2 : "));
    let ans = a * b;
    console.log("Multiplication : " + ans);
}
else if(choice == '/')
{
    div();
    let a = parseInt(prompt("\nEnter the No1 : "));
    let b = parseInt(prompt("\nEnter the No2 : "));
    let ans = a / b;
    console.log("Division : " + ans);
}
else if(choice == '%')
{
    rem();
    let a = parseInt(prompt("\nEnter the No1 : "));
    let b = parseInt(prompt("\nEnter the No2 : "));
    let ans = a % b;
    console.log("Remainder : " + ans);
}
else{
    console.log("\nSelect valid choice.")
}

