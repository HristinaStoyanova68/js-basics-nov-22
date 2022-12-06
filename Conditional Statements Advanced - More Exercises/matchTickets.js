function solve(input) {
    let budget = Number(input[0]);
    let typeOfTicket = input[1];
    let countOfPeople = Number(input[2]);
    let transportPrice = 0;
    let totalTicketsPrice = 0;
    let totalSum = 0;



    if (countOfPeople >= 1 && countOfPeople <= 4) {
        transportPrice = budget * 0.75;
    } else if (countOfPeople <= 9) {
        transportPrice = budget * 0.60;
    } else if (countOfPeople <= 24) {
        transportPrice = budget * 0.50;
    } else if (countOfPeople <= 49) {
        transportPrice = budget * 0.40;
    } else {
        transportPrice = budget * 0.25;
    }

    if (typeOfTicket === "VIP") {
        totalTicketsPrice = countOfPeople * 499.99;

    } else if (typeOfTicket === "Normal") {
        totalTicketsPrice = countOfPeople * 249.99;
    }

    totalSum = totalTicketsPrice + transportPrice;

    if (budget >= totalSum) {
        let moneyLeft = budget - totalSum;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);

    } else {
        let neededMoney = totalSum - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}

solve(["30000", "VIP", "49"]);