function fruitMarket(strawberriesPrice,bananasKg,orangesKg,raspberriesKg,strawberriesKg) {

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice * 0.60;
    let bananasPrice = raspberriesPrice * 0.20;

    let strSum = strawberriesKg * strawberriesPrice;
    let banSum = bananasKg * bananasPrice;
    let orSum = orangesKg * orangesPrice;
    let rasSum = raspberriesKg * raspberriesPrice;
    let total = strSum + banSum + orSum + rasSum;
    
    console.log(total.toFixed(2));

}

fruitMarket("63.5","3.57", "6.35", "8.15", "2.5");