const getElement = () =>{
    let mydiv = document.getElementById("mydiv");
    let h1 = document.createElement("h1");

    h1.innerHTML = "Chirag's Company";
    
    let link = document.createElement("a");
    link.innerHTML = "Amazon";
    link.href = "https://www.amazon.com";

    let img = document.createElement("img");
    img.src = "../Images/image5.jpg";
    img.style.height = "300px";
    img.style.width = "300px";

    mydiv.appendChild(h1);
    mydiv.appendChild(link);
    mydiv.appendChild(img);
}