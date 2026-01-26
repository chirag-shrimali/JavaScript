let a = parseInt(prompt("\nEnter the No1 : "))
let b = parseInt(prompt("\nEnter the No2 : "))

if(a > 0)
{
    if(a % 2 == 0)
    {
        let sum = 0;
        sum = a + b;
        console.log("\nThe Sum of one no A Positive and Even numbers are : ",sum);
    }
    else{
        let mul = a * b;
        console.log("\nThe Multiplication of one no A Positive and Odd numbers are : ",mul);
    }
}
else{
    if(b % 2 == 0)
    {
        let sub = a - b;
        console.log("\nThe Subtraction of one no B Negative and Even numbers are : ",sub);
    }
    else{
        let div = a/b;
        console.log("\nThe Division of one no B Negative and Odd numbers are : ",div);
    }
}