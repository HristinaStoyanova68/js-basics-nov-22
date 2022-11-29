function solve(input) {
    let index = 0;
    
    let maxBadGrades = Number(input[0]);
    index ++;
    let task = input[index];
    index ++;
    let taskGrade = Number(input[index]);
    index ++;
    let badGrades = 0;
    let gradesSum = 0;
    let gradesCount = 0;
    let lastTask = "";
    
    while (task !== "Enough") {
        lastTask = task;
        
        if (taskGrade <= 4) {
            badGrades ++; 
        }
        if (badGrades >= maxBadGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            return;
        }
        
        gradesSum += taskGrade;
        gradesCount ++;
        
        task = input[index]
        index ++;
        
        taskGrade = Number(input[index]);
        index ++;
    }

    let averageGrade = gradesSum / gradesCount;
    
    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastTask}`);
}

solve(["3",

"Money",

"6",

"Story",

"4",

"SpringTime",

"5",

"Bus",

"6",

"Enough"]) ;