// Calling Functions Programs

function pdf()
{
    console.log("The .PDF Extension to be called...");
}

function image()
{
    console.log("The .JPG or .PNG Extension to be Called...");
}

function audio()
{
    console.log("The .MP3 or .MP4 Extension to be Called...");
}

function check(extension , fun1 , fun2 , fun3)
{
    if(extension.endsWith('.pdf'))
    {
        fun1()
    }
    else if(extension.endsWith('.jpg') || extension.endsWith('.png'))
    {
        fun2()
    }
    else{
        fun3()
    }
}

// check("text.png" , pdf , image , audio)

// check("text.mp4" , pdf , image , audio)

check("text.pdf" , pdf , image , audio)