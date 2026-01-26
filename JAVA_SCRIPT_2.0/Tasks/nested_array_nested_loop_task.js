let heroes = [["Chirag" , "Vishwesh" , "Fenil"] , ["Shivam" , "Rahul" , "Mukesh"]];

for(let i = 0;i < heroes.length;i++)
{
    console.log(i,heroes[i],heroes[i].length);
    for(let j = 0;j < heroes[i].length;j++)
    {
        console.log(`${"j ="}`,j,heroes[i][j]);
    }
}