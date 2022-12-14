function safari(input) {
    let budget = Number(input[0]);
    let litersFuel = Number(input[1]);
    let dayOfWeek = input[2];
    let totalPrice = 0.00;

    let fuelPrice = litersFuel * 2.10;
    let allPrice = fuelPrice + 100;
    
    if (dayOfWeek === "Saturday" ) {
        totalPrice = allPrice * 0.90;
    } else if (dayOfWeek === "Sunday") {
        totalPrice = allPrice * 0.80;
    } if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv. `);
    } else {
        let neededMoney = totalPrice - budget;
        console.log(`Not enough money! Money needed: ${neededMoney.toFixed(2)} lv.`);
    }

}

safari(["105.20", "15", "Sunday"]);