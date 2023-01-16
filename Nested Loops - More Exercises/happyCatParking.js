function solve(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let hourFee = 0;
    let daySum = 0;
    let total = 0;


    for (let i = 1; i <= days; i++) {
        for (let j = 1; j <= hours; j++) {
            if ((i % 2 === 0) && (j % 2 !== 0)) {
                hourFee = 2.50;
            } else if ((i % 2 !== 0) && (j % 2 === 0)) {
                hourFee = 1.25;
            } else {
                hourFee = 1;
            }
            daySum += hourFee;

            if (j === hours) {
                console.log(`Day: ${i} - ${daySum.toFixed(2)} leva`);
                total += daySum;
                daySum = 0;

            }
        }
    }
    console.log(`Total: ${total.toFixed(2)} leva`);

}

solve(["2", "5"]);