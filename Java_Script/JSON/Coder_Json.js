const Coding = {
    definition : 'The process of writing instructions for computers using programming languages.',
    Built_Year : 1950,
    use : ['Software Developer','AI & ML','Cyber & Security','Web Development' , 'Data Base manipulation'],
    Languages : {
        'C' : {
            build_year : 1972,
            Creator : 'Dennis Ritchie',
            IsUseful : true,
            learn : ['Basic Coding','Understanding Coding','Beginner languages']
        },
        'C++' : {
            build_year : 1985,
            Creator : 'Bjarne Stroustrup',
            Use : 'Oops Concepts & Gaming',
            IsWorkingOn_VS_Code : true
        },
        'Python' : {
            build_year : 1991,
            IsFriendlyBasedLanguages : true,
            Creator : 'Guido van Rossum',
            use : ['Machine Learning' , 'Games' , 'Pandas' , 'AI']
        }
    }
};

console.log(Coding);

// console.log(typeof(Coding));

console.log(typeof Coding);

console.log("------------------------------------------------------------------");

console.log(Coding.Built_Year);

console.log(typeof Coding.Built_Year);

console.log("------------------------------------------------------------------");

console.log(Coding.definition);

console.log(typeof Coding.definition);

console.log("------------------------------------------------------------------");

console.log(Coding.Languages);

console.log(typeof Coding.Languages);

console.log("------------------------------------------------------------------");

console.log(Coding.Languages["C++"]);

console.log(typeof Coding.Languages["C++"]);

console.log("------------------------------------------------------------------");

console.log(Coding.Languages["C++"].Use);

console.log(typeof Coding.Languages["C++"].Use);

console.log("------------------------------------------------------------------");

console.log(Coding.Languages["C"]);

console.log(typeof Coding.Languages["C"]);

console.log("------------------------------------------------------------------");

console.log(Coding.Languages["C"].IsUseful);

console.log(typeof Coding.Languages["C"].IsUseful);

console.log("------------------------------------------------------------------");

console.log(Coding.Languages["Python"]);

console.log(typeof Coding.Languages["Python"]);

console.log("------------------------------------------------------------------");

console.log(Coding.Languages["Python"].Creator);

console.log(typeof Coding.Languages["Python"].Creator);

console.log("------------------------------------------------------------------");

console.log(Coding.Languages["C"].learn[2]);

console.log("------------------------------------------------------------------");

for(i = 0;i<Coding.Languages.C.learn.length;i++)
{
    console.log(Coding.Languages.C.learn[i]);
}