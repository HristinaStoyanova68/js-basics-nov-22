function solve(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);

    for (let i = 1; i <= firstNum; i++) {
        if (i % 2 === 0) {

            for (let j = 2; j <= secondNum; j++) {
                if (j > 7) {
                    continue;
                }
                if (j !== 4 && j !== 6) {

                    for (let k = 1; k <= thirdNum; k++) {
                        if (k % 2 === 0) {

                            console.log(`${i} ${j} ${k}`);
                        } else {
                            continue;
                        }
                    }
                }
            }
        } else {
            continue;
        }
    }
}
solve(["3", "5", "5"]);