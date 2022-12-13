function solve(input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let numOfSeries = Number(input[index]);
    index++;
    let seriesPrice = 0;
    let totalSum = 0;

    for (let i = 1; i <= numOfSeries; i++) {
        let seriesName = input[index];
        index++;
        seriesPrice = Number(input[index]);
        index++;
        if (seriesName === "Thrones") {
            seriesPrice /= 2;
        } else if (seriesName === "Lucifer") {
            seriesPrice *= 0.60;
        } else if (seriesName === "Protector") {
            seriesPrice *= 0.70;
        } else if (seriesName === "TotalDrama") {
            seriesPrice *= 0.80;
        } else if (seriesName === "Area") {
            seriesPrice *= 0.90;
        } else {
            seriesPrice = seriesPrice;
        }
        totalSum += seriesPrice;
        seriesName = input[index];
        seriesPrice = 0;

    }
    if (budget >= totalSum) {
        let moneyLeft = budget - totalSum;
        console.log(`You bought all the series and left with ${moneyLeft.toFixed(2)} lv.`);
    } else {
        let neededMoney = totalSum - budget;
        console.log(`You need ${neededMoney.toFixed(2)} lv. more to buy the series!`);
    }
}

solve(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"]);