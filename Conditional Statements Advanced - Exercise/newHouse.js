function newHouse(input){

    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus

    let typeFlower = input[0];
    let countFlower = Number(input[1]);
    let budget = Number(input[2]);

    pricePerRose = Number(5.00);
    pricePerDahlia = Number(3.80);
    pricePerTulip = Number(2.80);
    pricePerNarcissus = Number(3);
    pricePerGladiolus = Number(2.50);

    flowerPrice = 0.00;
    totalSum = 0.00;
    switch (typeFlower) {
        case "Roses":
            flowerPrice = countFlower * pricePerRose;
            if (countFlower > 80) {
                totalSum = flowerPrice * 0.90;
            } else {
                totalSum = flowerPrice;
            }
            break;
        case "Dahlias":
            flowerPrice = countFlower * pricePerDahlia;
            if (countFlower > 90) {
                totalSum = flowerPrice * 0.85;
            } else {
                totalSum = flowerPrice;
            }
            break;
        case "Tulips":
            flowerPrice = countFlower * pricePerTulip;
            if (countFlower > 80) {
                totalSum = flowerPrice * 0.85;
            } else {
                totalSum = flowerPrice;
            }
            break;
        case "Narcissus":
            flowerPrice = countFlower * pricePerNarcissus;
            if (countFlower < 120) {
                totalSum = flowerPrice * 1.15;
            } else {
                totalSum = flowerPrice;
            }
            break;
        case "Gladiolus":
            flowerPrice = countFlower * pricePerGladiolus;
            if (countFlower < 80) {
                totalSum = flowerPrice * 1.20;
            } else {
                totalSum = flowerPrice;
            }
            break;
    } if (budget >= totalSum) {
        let moneyLeft = budget - totalSum;
        console.log(`Hey, you have a great garden with ${countFlower} ${typeFlower} and ${moneyLeft.toFixed(2)} leva left.`);

    } else {
        let moneyNeeded = totalSum -budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
    


}

newHouse(["Tulips",

"88",

"260"]);