function solve(input) {

    let index = 0;
    let nameOfTourn = input[index];
    index++;
    let counterGames = 0;
    let winGames = 0;
    let lostGames = 0;

    while (nameOfTourn !== "End of tournaments") {

        let numOfGames = Number(input[index]);
        index++;
        counterGames += numOfGames;

        for (let i = 1; i <= numOfGames; i++) {
            let currGame = i;
            let desiScore = Number(input[index]);
            index++;
            let oponentScore = Number(input[index]);
            index++;
            if (desiScore > oponentScore) {
                let diff = desiScore - oponentScore;
                winGames++;
                console.log(`Game ${currGame} of tournament ${nameOfTourn}: win with ${diff} points.`);
            } else {
                let diff = oponentScore - desiScore;
                lostGames++;
                console.log(`Game ${currGame} of tournament ${nameOfTourn}: lost with ${diff} points.`);
            }
        }
        nameOfTourn = input[index];
        index++;

    }
    let winPercent = winGames / counterGames * 100;
    let lostPercent = lostGames / counterGames * 100;

    console.log(`${winPercent.toFixed(2)}% matches win`);
    console.log(`${lostPercent.toFixed(2)}% matches lost`);

}

solve(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"]);