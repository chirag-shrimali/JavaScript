let data = ["ram" , "amit" , "kunal" , "shyam" , "geeta" , "sita" , "don" , "Chirag"];

let data1 = [];

for(let i = 0;i < data.length;i++)
{
    if(data[i].length > 3)
    {
        data1 = data[i];
        console.log(data1);
    }
}