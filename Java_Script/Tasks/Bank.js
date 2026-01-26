let balance = 0;

let ano = prompt("\nCreate Account : \nEnter the Account Number : ");
let pa = prompt("\nEnter the Password : ");

function check_balance()
{
    console.log("\nThe User having the amount of Rs." + balance);
}

function withdraw()
{
    let amt = parseInt(prompt("\nEnter the amount that you want to be Withdrawn : "));

    if(balance - amt >= 10000) // 25000 - 10000 = 15000 >= 10000
    {
        balance = balance - amt;
        console.log("\nSuccessfully!! Withdrawn.");
        console.log("\nAfter the Withdrwan the current remaining money balance is : " + balance);
    }
    else{
        console.log("\nInsufficient Balance!!");
    }
}

function deposit()
{
    let amt = parseInt(prompt("\nEnter the amount that you want to be Deposit : "));

    balance = balance + amt;

    console.log("\nDeposit Successfully!!");
    console.log("\nAfter Deposit the Current Balance is : " + balance);
}

function verify()
{
    let ans = prompt("\nDo you want to enter in the ATM?(y/n)");

        if(ans == 'y' || ans == 'Y')
        {
            let accno = prompt("\nEnter the Account Number : ");
            let pass = prompt("\nEnter the Password : ");
                if(accno == ano && pass == pa)
                {

                while(true)
                {
                    let choice = parseInt(prompt("\nWelcome to the ATM : \n1. Check Balance\n2. Withdraw Money\n3. Deposit Money\n4. Exit\nEnter Your Choice : "));

                    if(choice > 0 && choice < 5)
                    {
                        switch(choice)
                        {
                            case 1 : check_balance();
                                     break;

                            case 2 : withdraw();
                                     break;

                            case 3 : deposit();
                                     break;

                            case 4 : console.log("\nExiting Successfully!!");
                                     return;
                        }
                    }
                    else{
                        console.log("\nInvalid Choice of selection please select the valid option of selection");
                    }
                }
            }
            else{
                console.log("\nPlease enter the valid accountno and password");
                
            }
        }
        else if(ans != 'Y' && ans != 'y' && ans != 'n' && ans != 'N')
        {
            console.log("\nSelect Only Yes or No.");
            return 0;
        }
        else{
            console.log("\nThanks for the visiting the BANK...");
        }
}


verify();