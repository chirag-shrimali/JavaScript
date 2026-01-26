let colors = ["red" , "blue" ,"green" ,"pink" ,"yellow" ,"yellowgreen" , "orange" , "orangered"];

const changecolor = () => {
    let changecolor = Math.floor(Math.random() * colors.length);
    console.log(changecolor);
    let color = document.getElementById("box");
    color.style.background = colors[changecolor];
}