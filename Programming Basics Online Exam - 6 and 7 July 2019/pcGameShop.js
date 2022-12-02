function solve(input) {
    let index = 0;
    let numOfGames = Number(input[index]);
    index++
    let countHearthstone = 0;
    let countFornite = 0;
    let countOverwatch = 0;
    let countOthers = 0;

    while (index <= numOfGames) {
        let currGame = input[index];
        index++;
        if (currGame === "Hearthstone") {
            countHearthstone++;

        } else if (currGame === "Fornite") {
            countFornite++;

        } else if (currGame === "Overwatch") {
            countOverwatch++;

        } else {
            countOthers++;

        }

    }
    let percentH = countHearthstone / numOfGames * 100;
    let percentF = countFornite / numOfGames * 100;
    let percentOverwatch = countOverwatch / numOfGames * 100;
    let percentOthers = countOthers / numOfGames * 100;

    console.log(`Hearthstone - ${percentH.toFixed(2)}%`);
    console.log(`Fornite - ${percentF.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOthers.toFixed(2)}%`);

}

solve(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"])
    ;