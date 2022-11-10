function shopping(input) {
    let budget = Number(input[0]);
    let n = Number(input[1]);
    let m = Number(input[2]);
    let p = Number(input[3]);

    let nPrice = Number(250);
    let mPrice = n * nPrice * 0.35;
    let pPrice = n * nPrice * 0.10;

    let sum = n * nPrice + m * mPrice + p * pPrice;
    
    if (n > m) {
        sum = sum * 0.85;
    }
    if (sum <= budget) {
        let  moneyLeft = budget - sum;
        
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let missingMoney = sum - budget;
        console.log(`Not enough money! You need ${missingMoney.toFixed(2)} leva more!`);
    }

    
}

shopping(["900","2","1","3"]);