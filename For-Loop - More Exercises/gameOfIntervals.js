function solve(input) {

    let index = 0;
    let moves = Number(input[index]);
    index++;
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;
    let total = 0;


    for (let i = 1; i <= moves; i++) {

        let currNum = Number(input[index]);
        index++;
        let points = 0;

        if (currNum >= 0 && currNum <= 9) {
            counter1++;
            points = currNum * 0.20;
        } else if (currNum >= 10 && currNum <= 19) {
            counter2++;
            points = currNum * 0.30;
        } else if (currNum >= 20 && currNum <= 29) {
            counter3++;
            points = currNum * 0.40;
        } else if (currNum >= 30 && currNum <= 39) {
            counter4++;
            points += 50;
        } else if (currNum >= 40 && currNum <= 50) {
            counter5++;
            points += 100;
        } else if (currNum < 0 || currNum > 50) {
            counter6++;
            total /= 2;
        }
        total += points;


    }
    let percent1 = counter1 / moves * 100;
    let percent2 = counter2 / moves * 100;
    let percent3 = counter3 / moves * 100;
    let percent4 = counter4 / moves * 100;
    let percent5 = counter5 / moves * 100;
    let percent6 = counter6 / moves * 100;

    console.log(`${total.toFixed(2)}`);
    console.log(`From 0 to 9: ${percent1.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percent2.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percent3.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percent4.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percent5.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percent6.toFixed(2)}%`);
}

solve(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);