function solve(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let totalWinGameCounter = 0;
    let totalLoseGameCounter = 0;
    let totalRaisedMoney = 0;


    for (let day = 1; day <= days; day++) {

        let sport = input[index];
        index++;
        let result = input[index];
        index++;
        let winGameCounter = 0;
        let loseGameCounter = 0;
        let raisedMoney = 0;



        while (sport !== "Finish") {


            if (result === "win") {
                winGameCounter++;
            } else if (result === "lose") {
                loseGameCounter++;
            }
            raisedMoney = winGameCounter * 20;

            sport = input[index];
            index++;
            result = input[index];
            index++;

        }
        if (winGameCounter > loseGameCounter) {
            raisedMoney *= 1.10;
        } else if (winGameCounter < loseGameCounter) {

        }
        totalRaisedMoney += raisedMoney;
        totalWinGameCounter += winGameCounter;
        totalLoseGameCounter += loseGameCounter;

        index = index - 1;
    }
    if (totalWinGameCounter > totalLoseGameCounter) {
        totalRaisedMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);

    } else {
        console.log(`You lost the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    }
}

solve(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"]);