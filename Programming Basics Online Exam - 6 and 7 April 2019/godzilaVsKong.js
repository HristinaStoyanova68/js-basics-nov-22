function solve(input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothesPerPerson = Number(input[2]);
    let allClothesPrice = 0;

    let decor = budget * 0.10;

    if (people > 150) {

        allClothesPrice = people * clothesPerPerson * 0.90;

    } else {
        allClothesPrice = people * clothesPerPerson;

    }
    let total = decor + allClothesPrice;

    if (total > budget) {
        let neededMoney = total - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - total;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }

}


solve(["9587.88",
    "222",
    "55.68"]);