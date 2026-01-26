const isprime = (no)=>{
    let i;
    let count = 0;

    for(i = 1;i<=no;i++)
    {
        if(no % i == 0)
        {
            count++;
        }
    }
        return (count == 2) ? "IsPrime" : "IsnotPrime";
}

const ans = isprime(99);
console.log(ans);