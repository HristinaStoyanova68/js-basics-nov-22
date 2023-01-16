function solve(input) {

    let countOfOne = Number(input[0]);
    let countOfTwo = Number(input[1]);
    let countOfFive = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= countOfOne; i++) {
        for (let j = 0; j <= countOfTwo; j++) {
            for (let k = 0; k <= countOfFive; k++) {
                if (((i * 1) + (j * 2) + (k * 5)) === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

solve(["5", "3", "1", "7"]);