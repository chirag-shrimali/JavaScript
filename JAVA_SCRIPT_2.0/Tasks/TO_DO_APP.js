let list = [];

while(1)
{
    choice = prompt("\nEnter Your Choice of the request for the to do app : ")

    if(choice.toLowerCase() == "list")
    {
        list.forEach(function(value , index)
        {
            console.log(value , index);
        });
    }
    else if(choice.toLowerCase() == "add")
    {
        let add = prompt("\nEnter the taskes that you want to add : ");
    
        list.push(add);    

        console.log("Task Added!!");
    }
    else if(choice.toLowerCase() == "delete")
    {
        list.forEach(function(task, index) 
        {
            console.log(index + " : " + task);
        });

    let dele = parseInt(prompt("Enter index to delete"));

        if (dele >= 0 && dele < list.length)
        {
            for (let i = dele; i < list.length - 1; i++)
            {
                list[i] = list[i + 1];
            }
            list.pop();

            console.log("Task Deleted Successfully!!");
        }
        else
        {
            console.log("Invalid Index!!");
        }
    }
    else if(choice.toLowerCase() == 'quit')
    {
        console.log("\nQuit the TO Do App!!");
        break;
    }
    else{
        console.log("\nInvalid Choice of Selection!!");
    }
}