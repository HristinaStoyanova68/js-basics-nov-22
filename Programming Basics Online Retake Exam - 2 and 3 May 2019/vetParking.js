function solve(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let sum = 0;
    let currDay = 0;
    let totalSum = 0;

    for (let i = 1; i <= days; i++) {
        currDay = i;

        for (let k = 1; k <= hours; k++) {
            if (i % 2 === 0 && k % 2 !== 0) {
                sum += 2.50;
            } else if (i % 2 !== 0 && k % 2 === 0) {
                sum += 1.25;

            } else {
                sum += 1;
            }
        }
        totalSum += sum;
        console.log(` Day: ${currDay} - ${sum.toFixed(2)} leva `);
        currDay = 0;
        sum = 0;
    }
    console.log(` Total: ${totalSum.toFixed(2)} leva  `);

}

solve(["5", "2"]);