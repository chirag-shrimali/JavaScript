const Games = {
    country : 'India',
    No_Of_Users : 9000000,
    IsUseFul : true,
    Pubg : {
        Full_Name : 'PlayerUnknown Battlegrounds',
        rating : 4.6,
        release_year : 2018,
        IsGood : false,
    },
    FreeFire : {
        Full_Name : 'Fast Real-time Extreme Engagement',
        rating : 4.2,
        release_year : 2017,
        my_friends_Playing_list : ['Raju','Ramesh','Suresh'],
        IsGood : false,
    },
    COC : {
        Full_name : 'Clash Of Clans',
        rating : 4.5,
        release_year : 2012,
        IsGood : true
    }
};

console.log(Games);

console.log(typeof(Games));

console.log("------------------------------------------------------------------------------");

console.log(Games.country);

console.log(typeof Games.country);

console.log("------------------------------------------------------------------------------");

console.log(Games.IsUseFul);

console.log(typeof(Games.IsUseFul));

console.log("------------------------------------------------------------------------------");

console.log(Games.COC);

console.log(typeof Games.COC);

console.log("------------------------------------------------------------------------------");

console.log(Games.Pubg);

console.log(typeof Games.Pubg);

console.log("------------------------------------------------------------------------------");

console.log(Games.FreeFire);

console.log(typeof Games.FreeFire);

console.log("------------------------------------------------------------------------------");

console.log(Games.FreeFire.release_year);

console.log(typeof(Games.FreeFire.release_year));

console.log("------------------------------------------------------------------------------");

console.log(Games.Pubg.rating);

console.log(typeof Games.Pubg.rating);

console.log("------------------------------------------------------------------------------");

console.log(Games.COC.IsGood);

console.log(typeof(Games.COC.IsGood));

console.log("------------------------------------------------------------------------------");

console.log(Games.FreeFire.my_friends_Playing_list[2]);

console.log(typeof Games.FreeFire.my_friends_Playing_list[2]);

console.log("------------------------------------------------------------------------------");

for(i = 0;i<Games.FreeFire.my_friends_Playing_list.length;i++)
{
    console.log(Games.FreeFire.my_friends_Playing_list[i]);
}