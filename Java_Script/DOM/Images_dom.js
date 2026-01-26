// let images = ["Archer1.jpg" , "Archer2.jpg" , "Coc1.jpg" ,"Coc2.jpg"];

// const changeImages = () =>{
//     let changeimg = Math.floor(Math.random() * images.length);
//     console.log(changeimg);
//     let image = document.getElementById("img");
//     image.src = "../Images/" + images[changeimg];
//     // let box = document.getElementById("box");
// }

let images = ["image1.jpg" , "image2.jpg" , "image3.jpg" , "image4.jpg" , "image5.jpg" , "image6.jpg" , "image7.jpg"];

const changeimg = () =>{
    let changeimg = Math.floor(Math.random() * images.length);
    console.log(changeimg);
    let image = document.getElementById("image");
    image.src = "../Images/" + images[changeimg];
}