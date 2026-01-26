const Asia_Cricket = {
    About : 'Asia T20 Cup',
    edition : 17,
    format : 'T20',
    group : 2,
    groups_name : 'A and B',
    Dates : '9 – 28 September 2025',
    Participants : 8,
    Administrator : 'Asian Cricket Council',
    Matches : 19 ,
    asian_cricket_teams : {
        India : {
        team_name : 'India',
        Test_Icc_Rankings : 2,
        T20_Icc_Rankings : 1,
        Odi_Icc_Rankings : 1,
        team_captains : 'SuryaKumar',
        Players_List : ['Gill','Jaiswal','Kl Rahul','Siraj','Surya Kumar','Rinku Singh','Riyan Parag','Bhumrah','Sanju Samson','Abhishek','Ruturaj']
        },
        Pakistan : {
        team_name : 'Pakistan',
        Test_Icc_Rankings : 6,
        T20_Icc_Rankings : 7,
        Odi_Icc_Rankings : 4,
        team_captains : 'Babar Azam',
        Players_List : ['Babar','Rizwan','Fakhar','Afridi','Shan','Sarfaraz','Bashir']
        },
        Sri_Lanka :{
        team_name : 'Sri_Lanka',
        Test_Icc_Rankings : 7,
        T20_Icc_Rankings : 8,
        Odi_Icc_Rankings : 7,
        team_captains : 'Mendis',
        Players_List : ['Mendis','Pathirana','Silva','Hasaranga','Kumar']
        },
        Afghanistan : { 
        team_name : 'Afghanistan',
        Test_Icc_Rankings : 10,
        T20_Icc_Rankings : 10,
        Odi_Icc_Rankings : 9,
        team_captains : 'Shahidi',
        Players_List : ['Shahidi','Rashid','Noor Ahmed','Nabi','Omarzai','Zadran','Ibrahim']
        }
    }
};

console.log(Asia_Cricket);

// console.log(typeof Asia_Cricket);

console.log(typeof(Asia_Cricket));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.About);

// console.log(typeof(Asia_Cricket.About));

console.log(typeof Asia_Cricket.About);

console.log("-------------------------------------------------");

console.log(Asia_Cricket.format);

// console.log(typeof(Asia_Cricket.About));

console.log(typeof Asia_Cricket.About);

console.log("-------------------------------------------------");

console.log(Asia_Cricket.group);

// console.log(typeof(Asia_Cricket.group));

console.log(typeof Asia_Cricket.group);

console.log("-------------------------------------------------");

console.log(Asia_Cricket.Dates);

// console.log(typeof(Asia_Cricket.Dates));

console.log(typeof Asia_Cricket.Dates);

console.log("-------------------------------------------------");

console.log(Asia_Cricket.Administrator);

// console.log(typeof(Asia_Cricket.Administrator));

console.log(typeof Asia_Cricket.Administrator);

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams);

// console.log(typeof Asia_Cricket.asian_cricket_teams);

console.log(typeof(Asia_Cricket.asian_cricket_teams));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.India);

console.log(typeof(Asia_Cricket.asian_cricket_teams.India));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.India.team_name);

console.log(typeof(Asia_Cricket.asian_cricket_teams.India.team_name));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.India.team_captains);

console.log(typeof(Asia_Cricket.asian_cricket_teams.India.team_captains));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.India.Players_List);

console.log(typeof(Asia_Cricket.asian_cricket_teams.India.Players_List));

console.log("-------------------------------------------------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Pakistan);

console.log(Asia_Cricket.asian_cricket_teams.Pakistan.team_name);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Pakistan.team_name));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Pakistan.Test_Icc_Rankings);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Pakistan.Test_Icc_Rankings));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Pakistan.Players_List);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Pakistan.Players_List));

console.log("------------------------------------------------------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Sri_Lanka);

console.log(Asia_Cricket.asian_cricket_teams.Sri_Lanka);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Sri_Lanka));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Sri_Lanka.team_name);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Sri_Lanka.team_name));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Sri_Lanka.T20_Icc_Rankings);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Sri_Lanka.T20_Icc_Rankings));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Sri_Lanka.Players_List);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Sri_Lanka.Players_List));

console.log("---------------------------------------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Afghanistan);

console.log(Asia_Cricket.asian_cricket_teams.Afghanistan);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Afghanistan));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Afghanistan.team_name);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Afghanistan.team_name));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Afghanistan.Odi_Icc_Rankings);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Afghanistan.Odi_Icc_Rankings));

console.log("-------------------------------------------------");

console.log(Asia_Cricket.asian_cricket_teams.Afghanistan.Players_List);

console.log(typeof(Asia_Cricket.asian_cricket_teams.Afghanistan.Players_List));

console.log("-------------------------------------------------");

// console.log(Asia_Cricket.asian_cricket_teams.India.Players_List[5]);

for(i = 0;i<Asia_Cricket.asian_cricket_teams.India.Players_List.length;i++)
{
    console.log(Asia_Cricket.asian_cricket_teams.India.Players_List[i]);
}