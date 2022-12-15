function solve(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;
    let p1count = 0;
    let p2count = 0;
    let p3count = 0;


    for (let i = 1; i <= n; i++) {

        let num = Number(input[i]);

        if (num % 2 === 0) {
            p1count++;
        }
        if (num % 3 === 0) {
            p2count++;
        }
        if (num % 4 === 0) {
            p3count++;
        }

    }
    let percentP1 = p1count / n * 100;
    let percentP2 = p2count / n * 100;
    let percentP3 = p3count / n * 100;
    console.log(`${percentP1.toFixed(2)}%`);
    console.log(`${percentP2.toFixed(2)}%`);
    console.log(`${percentP3.toFixed(2)}%`);
}

solve([
    "3",
    "3",
    "6",
    "9",
]);