function solve(input) {


    let index = 0;
    let budget = Number(input[index]);
    index++;
    let nameOfProduct = input[index];
    index++;
    let productCount = 0;
    let totalSum = 0;

    while (nameOfProduct !== "Stop") {
        productCount++;
        let currPrice = Number(input[index]);
        index++;
        if (productCount % 3 === 0) {
            currPrice /= 2;
        }
        if (currPrice > budget) {
            console.log("You don't have enough money!");
            let neededMoney = currPrice - budget;
            console.log(`You need ${neededMoney.toFixed(2)} leva!`);

            return;
        } else {
            budget -= currPrice;
        }
        totalSum += currPrice;

        nameOfProduct = input[index];
        index++;


    }

    console.log(`You bought ${productCount} products for ${totalSum.toFixed(2)} leva.`);
}

solve(["54",
    "Thermal underwear",
    "54",
    "Sunscreen",
    "45"]);