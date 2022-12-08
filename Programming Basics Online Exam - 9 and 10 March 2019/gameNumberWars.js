function solve(input) {

    let index = 0;
    let firstGamer = input[index];
    index++;
    let secondGamer = input[index];
    index++;
    let score = input[index];

    let winFirst = 0;
    let winSecond = 0;

    while (score !== "End of game") {
        let scoreFirst = Number(score);
        index++;
        let scoreSecond = Number(input[index]);
        index++;

        if (scoreFirst > scoreSecond) {
            winFirst += (scoreFirst - scoreSecond);

        } else if (scoreSecond > scoreFirst) {
            winSecond += (scoreSecond - scoreFirst);

        } else {

            console.log("Number wars!");
            scoreFirst = Number(input[index]);
            index++;
            scoreSecond = Number(input[index]);

            if (scoreFirst > scoreSecond) {

                console.log(`${firstGamer} is winner with ${winFirst} points`);
            } else {

                console.log(`${secondGamer} is winner with ${winSecond} points`);
            }
            return;
        }
        score = input[index];

    }
    console.log(`${firstGamer} has ${winFirst} points`);
    console.log(`${secondGamer} has ${winSecond} points`);

}

solve(["Elena",
    "Simeon",
    "6",
    "3",
    "2",
    "5",
    "8",
    "9",
    "End of game"]);