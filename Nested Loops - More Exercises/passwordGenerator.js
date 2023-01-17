function solve(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let result = "";


    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 97; k <= 97 + (l - 1); k++) {
                let g = String.fromCharCode(k);
                for (let p = 97; p <= 97 + (l - 1); p++) {
                    let m = String.fromCharCode(p);
                    for (let q = 1; q <= n; q++) {
                        if (q > i && q > j) {
                            result += `${i}${j}${g}${m}${q} `;
                        }
                        else {
                            continue;
                        }
                    }
                }
            }
        }
    }
    console.log(result);

}

solve(["3", "1"]);