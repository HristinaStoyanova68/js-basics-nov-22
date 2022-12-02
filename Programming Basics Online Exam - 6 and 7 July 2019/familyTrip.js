function solve(input) {

    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let addCostPercent = Number(input[3]);
    let totalSum = 0;

    let addCost = budget * addCostPercent / 100;

    if (nightsCount > 7) {
        let nightPriceAfterDiscount = nightPrice * 0.95;
        totalSum = (nightsCount * nightPriceAfterDiscount) + addCost;
        if (totalSum > budget) {
            let neededMoney = totalSum - budget;
            console.log(`${neededMoney.toFixed(2)} leva needed.`);
        } else {
            let moneyLeft = budget - totalSum;
            console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
        }
    } else {
        totalSum = (nightsCount * nightPrice) + addCost;
        if (totalSum > budget) {
            let neededMoney = totalSum - budget;
            console.log(`${neededMoney.toFixed(2)} leva needed.`);
        } else {
            let moneyLeft = budget - totalSum;
            console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
        }

    }
}

solve(["500",
"7",
"66",
"15"])
;