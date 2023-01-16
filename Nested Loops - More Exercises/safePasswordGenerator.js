function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxComb = Number(input[2]);
    let result = "";
    let countComb = 0;

    for (let i = 35; i <= 55; i++) {

        let simbolA = String.fromCharCode(i);
        for (let j = 64; j <= 96; j++) {

            let simbolB = String.fromCharCode(j);
            for (let k = 1; k <= a; k++) {
                let x = k;
                for (let l = 1; l <= b; l++) {
                    let y = l;

                    result += `${simbolA}${simbolB}${x}${y}${simbolB}${simbolA}|`;
                    countComb++;
                    if (k === a && l === b) {
                        console.log(result);
                        return;
                    }
                    if (countComb === maxComb) {
                        console.log(result);
                        return;
                    }
                    i++;
                    if (i > 55) {
                        i = 35;
                    }
                    simbolA = String.fromCharCode(i);
                    j++;
                    if (j > 96) {
                        j = 64;
                    }
                    simbolB = String.fromCharCode(j);
                }
            }
        }
    }
}

solve(["20", "50", "10"]);