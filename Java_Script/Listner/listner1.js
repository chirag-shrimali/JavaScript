let box = document.getElementsByClassName("box");

box[1].addEventListener("click" , ()=>{
    box[0].style.borderRadius = "50%" ,
    box[2].style.borderRadius = "50%" ,
    box[3].style.borderRadius = "50%"
});

box[2].addEventListener("click" , ()=>{
    box[0].style.backgroundColor = "yellow" ,
    box[1].style.backgroundColor = "red" ,
    box[3].style.backgroundColor = "blue"
});

let colors = ["red","blue","green","purple","pink","orange","brown","grey"]

box[3].addEventListener("mousemove" , ()=>{
    let color_change = Math.floor(Math.random() * colors.length);
    box[0].style.backgroundColor = colors[color_change] ,
    box[1].style.backgroundColor = colors[color_change] ,
    box[2].style.backgroundColor = colors[color_change]
})