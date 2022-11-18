

function easterLunch(input) {

    let easterBreadCount = Number(input[0]);
    let eggsPackCount = Number(input[1]);
    let biscuitsKg = Number(input[2]);

    let easterBreadPrice = easterBreadCount * 3.20;
    let coloringPricePerEggsPack = 12 * 0.15;
    let coloringEggsPackPrice = eggsPackCount * (coloringPricePerEggsPack + 4.35);
    let biscuitsPrice = biscuitsKg * 5.40;

    let totalSum = easterBreadPrice + coloringEggsPackPrice + biscuitsPrice;
     console.log(totalSum.toFixed(2));

}

easterLunch(["4", "4", "3"]);