function solve(input) {

    let index = 0;
    let nameOfActor = input[index];
    index++;
    let scoreActor = Number(input[index]);
    index++;
    let numOfAssessors = Number(input[index]);
    index++;
    let currScore = 0;

    for (let i = 1; i <= numOfAssessors; i++) {
        let nameOfAssessor = input[index];
        index++;
        let scoreOfAssessor = Number(input[index]);
        index++;
        currScore = nameOfAssessor.length * scoreOfAssessor / 2;
        scoreActor += currScore;

        if (scoreActor > 1250.5) {
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${scoreActor.toFixed(1)}!`);
            return;
        }
    }
    let neededScore = 1250.5 - scoreActor;
    console.log(`Sorry, ${nameOfActor} you need ${neededScore.toFixed(1)} more!`);
}

solve(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);