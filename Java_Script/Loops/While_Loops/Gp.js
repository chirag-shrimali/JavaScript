// displays Gp likes 1,2,4,8,16,32... upto 'n' terms as users enters

// Gp --- geometrics progression

// an = a * r ^ n - 1

// a starting numbers with is 1 so, a = 1

let no = parseInt(prompt("\nEnter the No : "));

// let a = 1;

// let i = 1;
// while(i<=no)
// {
//     console.log(" " + a);
//     a = a * 2;
//     i++;
// }

// displays this GP - 3,12,48,...upto 'n' terms.

let a = 3;

let i = 1;
while(i<=no)
{
    console.log(" " + a);
    a = a * 4;
    i++;
}