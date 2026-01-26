const get_data = async () => {
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  
  const response = await fetch("https://node5.onrender.com/user/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      age: age,
      gender: gender
    })
  });

//   const res = await response.json();
//   console.log(res);
  alert("User Created Successfully!");
  console.log(response)
};

document.getElementById("get_data").addEventListener("click", get_data);
