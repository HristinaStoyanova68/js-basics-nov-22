
function easterBakery(input) {

    let flourPrice = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggsPackCount = Number(input[3]);
    let yeastPackCount = Number(input[4]);

    let sugarPrice = flourPrice * 0.75;
    let eggsPackPrice = flourPrice * 1.10;
    let yeastPackPrice = sugarPrice * 0.20;

    let totalSum = flourKg * flourPrice + sugarKg * sugarPrice + eggsPackCount * eggsPackPrice + yeastPackCount * yeastPackPrice;
    
    console.log(totalSum.toFixed(2));
}

easterBakery(["63.44", "3.57", "6.35", "8", "2"]);