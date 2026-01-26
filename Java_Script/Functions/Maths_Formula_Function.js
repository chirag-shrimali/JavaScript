// Circle Area : pi * r * r;

let r = prompt("\nEnter the Radius : ");

function circle(r)
{
    return 3.14 * r * r;
}

console.log("\nThe Area of Circle are : " + circle(r));

// Square Area : r * r;

function square(r)
{
    return r * r;
}

console.log("\nThe Area of Square are : " + square(r));

// Triangular Area : 0.5 * r * w;

let w = prompt("\nEnter the one side of triangular : ");

function triangular(r,w)
{
    return 0.5 * r * w;
}

console.log("\nThe Area of Triangular are : " + triangular(r,w));