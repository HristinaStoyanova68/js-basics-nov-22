function movieDestination(input) {

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let countDays = Number(input[3]);
    let totalMoney = 0.00;

    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                totalMoney = countDays * 45000 * 0.70;
            } else if (season === "Summer") {
                totalMoney = countDays * 40000 * 0.70;
            }
            break;
        case "Sofia":
            if (season === "Winter") {
                totalMoney = countDays * 17000 * 1.25;
            } else if (season === "Summer") {
                totalMoney = countDays * 12500 * 1.25;
            }
            break;
        case "London":
            if (season === "Winter") {
                totalMoney = countDays * 24000;
            } else if (season === "Summer") {
                totalMoney = countDays * 20250;
            }
            break;
    } if (budget >= totalMoney) {
        moneyLeft = budget - totalMoney;
        console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        neededMoney = totalMoney - budget;
        console.log(`The director needs ${neededMoney.toFixed(2)} leva more!`);
    }
}

movieDestination(["200000", "London", "Summer", "7"]);
