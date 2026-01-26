const submitfunction = (event)=>{
    event.preventDefault();

    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let email = document.getElementById("email").value;
    let mob = document.getElementById("mob").value;
    let age = document.getElementById("age").value;

    let nameerr = document.getElementById("nameerr");
    let passerr = document.getElementById("passerr");
    let emailerr = document.getElementById("emailerr");
    let moberr = document.getElementById("moberr");
    let ageerr = document.getElementById("ageerr");

    if(age < 18)
    {
        ageerr.innerHTML = "Age are having more than 17 years."
        ageerr.style.color = "red";
    }
    else{
        ageerr.innerHTML = age;
        ageerr.style.color = "green";
    }

    if(mob.length != 10)
    {
        moberr.innerHTML = "Mobile Is Not Valid Cz 10 digits numbers is required!!";
        moberr.style.color = "red";
    }
    else{
        moberr.innerHTML = mob;
        moberr.style.color = "green";
    }

    if(name.length <= 0) 
    {
        nameerr.innerHTML = "Name is Required";
        nameerr.style.color = "red";
    }
    else if(name.trim().length < 3) 
    {
        nameerr.innerHTML = "Name is Too Short";
        nameerr.style.color = "red";
    }
    else 
    {
        nameerr.innerHTML = name;
        nameerr.style.color = "green";
    }

    let passpattern = /^[A-Z](1)[a-z0-9]+.@$/;

    if(!pass.value.match(passpattern))
    {
        passerr.innerHTML = "Invalid Password!!";
        passerr.style.color = "red";
    }
    else{
        passerr.innerHTML = "Valid Password!!";
        passerr.style.color = "green";
    }

    alert("Form Is Submitted Successfully!!");
}