const Hotel = {
    Name : 'NeelKanth Hotel',
    place : 'Ahmedabad',
    established : 1995,
    ISOpen : true,
    No_Of_Waiters : 49,
    Time : '10.00 A.M. to 11.00 P.M.',
    Menu : {
        Kathyawadi : {
            Dishes_Name : ['Sev Tameto Ki Sabji','Bajri No Rotlo','Butter Milk','Bartha Ki Sabji','Kadi Rice'],
            Prices_of_Dishes : [200,25,30,180,100],
            quality : 9.5,
            rate : 4.6,
            IsBhindi_Ki_Sabji_available : false
        },
        Punjabi : {
            Dishes_Name : ['Cheese Ki Sabji','Dry Fry Zeera Rice','Butter Milk','Panner Ki Sabji','Chana Ki Sabji'],
            Prices_of_Dishes : [200,140,30,190,140],
            quality : 9.2,
            rate : 4.4,
            IsSoupavailable : true
        },
        Gujarati : {
            Dishes_Name : ['Aalu Ki Sabji','Plain Roti','Butter Milk','Dard Rice','Fafra'],
            Prices_of_Dishes : [100,20,25,70,40],
            quality : 9.8,
            rate : 4.7,
        },
        South_Indian : {
            Dishes_Name : ['Idli','Dosa','Butter Milk','Chutney','MeduVada','KandaVada','Shambhar'],
            Prices_of_Dishes : [40,50,25,25,30,35,15],
            quality : 9.6,
            rate : 4.2,
        }
    }
};

console.log(Hotel);

// console.log(typeof Hotel);

console.log(typeof(Hotel));

console.log("-----------------------------------------");

console.log(Hotel.Menu);

console.log(typeof(Hotel.Menu));

console.log("-----------------------------------------");

console.log(Hotel.No_Of_Waiters);

console.log(typeof(Hotel.No_Of_Waiters));

console.log("-----------------------------------------");

console.log(Hotel.place);

console.log(typeof(Hotel.place));

console.log("-----------------------------------------");

console.log(Hotel.Time);

console.log(typeof(Hotel.Time));

console.log("-----------------------------------------");

console.log(Hotel.Menu.Punjabi);

console.log(typeof(Hotel.Menu.Punjabi));

console.log("-----------------------------------------");

console.log(Hotel.Menu.Punjabi.IsSoupavailable);

console.log(typeof(Hotel.Menu.Punjabi.IsSoupavailable));

console.log("-----------------------------------------");

console.log(Hotel.Menu.Punjabi.Prices_of_Dishes);

console.log(typeof(Hotel.Menu.Punjabi.Prices_of_Dishes));

console.log("-----------------------------------------");

console.log(Hotel.Menu.Gujarati);

console.log(typeof(Hotel.Gujarati));

console.log("-----------------------------------------");

console.log(Hotel.Menu.Gujarati.quality);

console.log(typeof(Hotel.Menu.Gujarati.quality));

console.log("-----------------------------------------");

console.log(Hotel.Menu.Gujarati.Dishes_Name);

console.log(typeof(Hotel.Menu.Gujarati.Dishes_Name));

console.log("-----------------------------------------");

console.log(Hotel.Menu.South_Indian);

console.log(typeof(Hotel.Menu.South_Indian));

console.log("-----------------------------------------");

console.log(Hotel.Menu.South_Indian.rate);

console.log(typeof(Hotel.Menu.South_Indian.rate));

console.log("-----------------------------------------");

console.log(Hotel.Menu.South_Indian.Prices_of_Dishes);

console.log(typeof(Hotel.Menu.South_Indian.Prices_of_Dishes));

console.log("-----------------------------------------");

console.log(Hotel.Menu.Kathyawadi.Prices_of_Dishes[3]);

for(i = 0;i<Hotel.Menu.Kathyawadi.Dishes_Name.length;i++)
{
    console.log(Hotel.Menu.Kathyawadi.Dishes_Name[i]);
}