// displays this AP - 1,3,5,7,9 ... (2n-1) upto 'n' terms.

// AP is arithmatics progression it's just one kinds of squences

let no = parseInt(prompt("\nEnter the Number that you find it's AP series upto 'n' numbers of terms : "));

// first methods but it is doing well only for this particulars questions

// let i = 1;

// while(i<=no)
// {
//     console.log(" " + i);
//     i = i + 2; // i+ = 2;
// }

//---------------------------------------------------------------------------------------------

// a , a + d , a + 2d , a + 3d , ... , a + (n-1)*d

// an = tn = Tn = a + (n-1)*d
// d = 2;
// n means no users enters
// a starting numbers with is a = 1.so,

// e.x. an = a + (n-1) * d = 1 + (n-1) * 2 = 1 + 2n-2 = 2n-1 

// also writes an , tn , Tn 

// let i = 1;

// while(i<=2*no-1)
// {
//     console.log(" " + i);
//     i = i + 2; // i+ = 2;
// }

// for(let i = 1;i<=2*no-1;i=i+2)
// {
//     console.log(" " + i);
// }

//-------------------------------------------------------------------------------------------

// displays this AP-4,7,10,13,16... upto 'n' terms.
// a = 4;
// d = 7 - 4 = a2 - a1 = 3
// an = tn = Tn = a + (n-1) * d;
// an = 4 + (n-1) * 3 = 4 + 3n - 3 = 3n + 1

let i = 4;
while(i<=3 * no + 1)
{
    console.log(" " + i);
    i = i + 3; // i+ = 3;
}