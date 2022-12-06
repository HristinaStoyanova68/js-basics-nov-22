function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let locationPrice = 0;
    let location = "";
    let place = "";

    switch (season) {
        case "Summer":
            if (budget <= 1000) {
                locationPrice = budget * 0.65;
                location = "Alaska";
                place = "Camp";
            } else if (budget <= 3000) {
                locationPrice = budget * 0.80;
                location = "Alaska";
                place = "Hut";
            } else {
                locationPrice = budget * 0.90;
                location = "Alaska";
                place = "Hotel";
            }
            break;
        case "Winter":
            if (budget <= 1000) {
                locationPrice = budget * 0.45;
                location = "Morocco";
                place = "Camp";
            } else if (budget <= 3000) {
                locationPrice = budget * 0.60;
                location = "Morocco";
                place = "Hut";
            } else {
                locationPrice = budget * 0.90;
                location = "Morocco";
                place = "Hotel";
            }
            break;
    }
    console.log(`${location} - ${place} - ${locationPrice.toFixed(2)}`);

}

solve(["2543.99", "Winter"]);