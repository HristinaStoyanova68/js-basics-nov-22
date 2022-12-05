function solve(input) {
    let index = 0;
    let trainers = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let countPresentation = 0;
    let totalAverageSum = 0;

    while (action !== "Finish") {

        let nameOfPresintation = action;
        countPresentation++;

        let gradeSum = 0;
        let averageSum = 0;

        for (let i = 1; i <= trainers; i++) {
            let currGrade = Number(input[index]);
            index++;
            gradeSum += currGrade;


        } averageSum = gradeSum / trainers;
        totalAverageSum += averageSum;

        console.log(`${nameOfPresintation} - ${averageSum.toFixed(2)}.`);

        action = input[index];
        index++;

    }
    let averageTotal = totalAverageSum / countPresentation;

    console.log(`Student's final assessment is ${averageTotal.toFixed(2)}.`);



}

solve(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);