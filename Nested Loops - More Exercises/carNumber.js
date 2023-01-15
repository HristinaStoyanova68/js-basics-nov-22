function solve(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = "";

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            for (let k = startNum; k <= endNum; k++) {
                for (let l = startNum; l <= endNum; l++) {
                    if (((i % 2 === 0) && (l % 2 !== 0)) && (i > l) && ((j + k) % 2 === 0)) {
                        result += `${i}${j}${k}${l} `;
                    } else if ((i % 2 !== 0 && l % 2 === 0) && (i > l) && ((j + k) % 2 === 0)) {
                        result += `${i}${j}${k}${l} `;
                    } else {
                        continue;
                    }
                }
            }
        }

    }
    console.log(result.trimEnd());
}

solve(["3", "5"]);