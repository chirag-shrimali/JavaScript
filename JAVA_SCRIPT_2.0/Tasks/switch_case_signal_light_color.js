let color = prompt("Entr the Color : ");

switch(color.toLowerCase())
{
    case "red" :
        console.log('Stop Your Vehicle...');
        break;
    case 'green' :
        console.log("Go Your Vehicle...");
        break;
    case "yellow".toLowerCase() :
        console.log('Slow down Your Vehicle...');
        break;

    default : console.log('Your living house is belonged to the moon...')
}