let color = prompt('Enter the Color of the traffic Single : ')

color = color.toLowerCase();

if(color == "red")
{
    console.log("Stop your Vehicle!!");
}
else if(color == 'green')
{
    console.log("Go Your Vehicle!!");
}
else if(color == "yellow")
{
    console.log('Slow Your Vehicle!!');
}
else{
    console.log("I think you are coming from moon because in the earth the traffic single light is not this types you are alien!!");
}