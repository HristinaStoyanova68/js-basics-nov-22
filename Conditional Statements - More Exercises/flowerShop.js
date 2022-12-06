function flowerShop(input) {
     
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let giftPrice = Number(input[4]);

    let earnings = (magnolias * 3.25) + (hyacinths * 4.00) + (roses * 3.50) + (cactuses * 8.00);
    let earningsAfterTax = earnings * 0.95;

    if ( earningsAfterTax >= giftPrice) {
        let moneyLeft = earningsAfterTax - giftPrice;
        console.log(`She is left with ${Math.floor(moneyLeft)} leva.`);
    } else {
        let neededMoney = giftPrice - earningsAfterTax;
        console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.`);
    }

}

flowerShop(["15","7","5","10","100"]);