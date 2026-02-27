// using calling function we can be make the programs of the login successfull and login failed... calling function we can be used when the parameter we have to pass...

function login()
{
    console.log("Login successfully!!");
}

function loginFail()
{
    console.log("Login Failed!!");
}

function call(username , password , fun1 , fun2)
{
    if(username === "Chirag Shrimali" && password === "Chirag@2147")
    {
        fun1()
    }
    else{
        fun2()
    }
}

// call("Chirag Shrimali" , "Chirag@2147" , login , loginFail);

// call("Chirag Shrimali" , "Chirag@147" , login , loginFail);

// call("Chirag shrimali" , "Chirag@2147" , login , loginFail);

call("Chirg Shrimali" , "Chirag2147" , login , loginFail);