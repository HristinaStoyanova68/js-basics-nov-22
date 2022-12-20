function solve(input) {

    let season = input[0];
    let kilometers = Number(input[1]);
    let pricePerKm = 0;

    switch (season) {
        case "Spring":
        case "Autumn":
            if (kilometers <= 5000) {
                pricePerKm = 0.75;
            } else if (kilometers <= 10000) {
                pricePerKm = 0.95;
            } else {
                pricePerKm = 1.45;
            }
            break;
        case "Summer":
            if (kilometers <= 5000) {
                pricePerKm = 0.90;
            } else if (kilometers <= 10000) {
                pricePerKm = 1.10;
            } else {
                pricePerKm = 1.45;
            }
            break;
        case "Winter":
            if (kilometers <= 5000) {
                pricePerKm = 1.05;
            } else if (kilometers <= 10000) {
                pricePerKm = 1.25;
            } else {
                pricePerKm = 1.45;
            }
            break;
    }
    let seasonPrice = kilometers * 4 * pricePerKm;
    let total = seasonPrice * 0.90;
    console.log(total.toFixed(2));
}

solve(["Winter", "4350"]);