function solve(input) {
    let index = 0;
    let countFirstEggs = Number(input[index]);
    index++;
    let countSecondEggs = Number(input[index]);
    index++;
    let winner = input[index];
    index++;
    let countFirstLeft = countFirstEggs;
    let countSecondLeft = countSecondEggs;


    while (winner !== "End") {

        if (winner === "one") {

            countSecondLeft -= 1;

            if (countSecondLeft === 0) {
                console.log(`Player two is out of eggs. Player one has ${countFirstLeft} eggs left.`);
                return;
            }
        } else if (winner === "two") {

            countFirstLeft -= 1;

            if (countFirstLeft === 0) {
                console.log(`Player one is out of eggs. Player two has ${countSecondLeft} eggs left.`);
                return;
            }
        }
        winner = input[index];
        index++;
    }
    console.log(`Player one has ${countFirstLeft} eggs left.`);
    console.log(`Player two has ${countSecondLeft} eggs left.`);

}

solve(["6", "3", "one", "two", "two", "one", "one"]);