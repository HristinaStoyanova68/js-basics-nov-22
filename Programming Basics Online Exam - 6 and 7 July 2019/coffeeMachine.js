function solve(input) {

    let drink = input[0];
    let sugar = input[1];
    let countDrink = Number(input[2]);
    let drinkPrice = 0;
    let totalSum = 0;

    switch (drink) {
        case "Espresso":
            if (sugar === "Without") {
                drinkPrice = 0.90 * 0.65;
                totalSum = countDrink * drinkPrice;
            } else if (sugar === "Normal" ) {
                totalSum = countDrink * 1.00; 
            } else if (sugar === "Extra") {
                totalSum = countDrink * 1.20;
            }
            if (countDrink >= 5) {
                totalSum = totalSum * 0.75;
                
            } 
            break;
        case "Cappuccino":
            if (sugar === "Without") {
                drinkPrice = 1.00 * 0.65;
                totalSum = countDrink * drinkPrice;
            } else if (sugar === "Normal" ) {
                totalSum = countDrink * 1.20; 
            } else if (sugar === "Extra") {
                totalSum = countDrink * 1.60;
            }
            break;
        case "Tea":
            if (sugar === "Without") {
                drinkPrice = 0.50 * 0.65;
                totalSum = countDrink * drinkPrice;
            } else if (sugar === "Normal" ) {
                totalSum = countDrink * 0.60; 
            } else if (sugar === "Extra") {
                totalSum = countDrink * 0.70;
            }
            break;
    } if (totalSum > 15) {
        totalSum = totalSum * 0.80;
    }
    console.log(`You bought ${countDrink} cups of ${drink} for ${totalSum.toFixed(2)} lv.`);

}

solve(["Tea", "Extra", "3"]);