function solve(input) {

    let sum = Number(input[0]);
    let change = Math.round(sum * 100);
    let coinsUsed = 0;

    while (change > 0) {
        
        if (change >= 200)  {
        change -= 200;
        coinsUsed ++;
    } else if (change >= 100) {
        change -= 100;
        coinsUsed ++;
    } else if (change >= 50) {
        change -= 50;
        coinsUsed ++;
    } else if (change >= 20) {
        change -= 20;
        coinsUsed++;
    } else if (change >= 10) {
        change -= 10;
        coinsUsed ++;
    } else if (change >= 5) {
        change -= 5;
        coinsUsed ++;
    } else if (change >= 2) {
        change -= 2;
        coinsUsed ++;
    } else if (change >= 1) {
        change -= 1;
        coinsUsed ++;
    }
}

    console.log(coinsUsed);

}

solve(["0.56"]);