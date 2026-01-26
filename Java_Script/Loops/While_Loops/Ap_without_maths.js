// displays this AP-4,7,10,13,16... upto 'n' terms.
// with out using an = tn = Tn = a + (n-1) * d;

// here a = 4;
// d---difference = a2 - a1 = 7 - 4 = 3

let no = parseInt(prompt("\nEnter the No : "));

// let a = 4;

// let i = 1;
// while(i<=no)
// {
//     console.log(" " + a);
//     a = a + 3;
//     i++; 
// }

//--------------------------------------------------------------------------------------------

// displays this AP - 1,3,5,7,9 ... (2n-1) upto 'n' terms.

// here a = 1
// d = 3 - 1 = 2.so,

let a = 1;

let i = 1;
while(i<=no)
{
    console.log(" " + a);
    a = a + 2;
    i++;
}