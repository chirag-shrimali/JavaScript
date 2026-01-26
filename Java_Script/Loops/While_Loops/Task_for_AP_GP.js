// displays this AP - 100,97,94,...upto all terms are positive.

// a = 100 , d = -3;

let no = parseInt(prompt("\nEnter the No : "));

// let a = 100;

// let i = 1;
// while(i<=no)
// {
//     console.log(" " + a);
//     a = a - 3;
//     i++;
// }

// other methods to do that particular sums

// here a = 100 , d = -3 

// and an = tn = Tn = a + (n-1) * d = 100 + (n-1) * -3 = 100 - 3n + 3 = 103 - 3n

// let i = 100;
// while(i>=103 - 3 * no)
// {
//     console.log(" " + i);
//     i = i - 3;
// }

//----------------------------------------------------------------------------------------------------

// for GP - geometrics progression

// an = a * r ^ n - 1

// displays this GP - 100,50,25,... upto 'n' terms.

// here a = 100

let a = 100;

let i = no;
while(i>=1)
{
    console.log(" " + a);
    a = a * 0.5;
    i--;
}