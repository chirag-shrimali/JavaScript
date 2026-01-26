let previous = document.getElementById("previous");
let image = document.getElementById("image");
let next = document.getElementById("next");

let current_index = 0;
let images = ["image1.jpg" , "image2.jpg" , "image3.jpg" , "image4.jpg" , "image5.jpg" , "image6.jpg" , "image7.jpg"];

previous.addEventListener("click" , () =>{
    current_index = (current_index + images.length - 1) % images.length;
    image.src = "../Images/" + images[current_index];
});

next.addEventListener("click" , () =>{
    current_index = (current_index + 1) % images.length;

    image.src = "../Images/" + images[current_index];
});

