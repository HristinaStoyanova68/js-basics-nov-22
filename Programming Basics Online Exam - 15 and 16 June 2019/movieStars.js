function solve(input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let nameOfActor = input[index];
    index++;
    let actorPrice = 0;

    while (nameOfActor !== "ACTION") {

        if (nameOfActor.length > 15) {
            actorPrice = budget * 0.20;
        } else {
            actorPrice = Number(input[index]);
            index++;
        }
        if (actorPrice > budget) {
            break;
        }
        budget -= actorPrice;
        nameOfActor = input[index];
        index++;
        actorPrice = 0;
    }
    if (budget >= actorPrice) {
        let moneyLeft = budget - actorPrice;
        console.log(`We are left with ${moneyLeft.toFixed(2)} leva.`);
    } else {
        let neededMoney = actorPrice - budget;
        console.log(`We need ${neededMoney.toFixed(2)} leva for our actors.`);
    }

}

solve(["170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"]);