function solve(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combCount = 0;
    let comb = 0;

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            comb = i + j;
            combCount++;
            if (comb === magicNum) {
                console.log(`Combination N:${combCount} (${i} + ${j} = ${magicNum})`);
                return;

            }
        }
    }
    if (comb !== magicNum) {
        console.log(`${combCount} combinations - neither equals ${magicNum}`);
    }
}

solve(["88", "888", "2000"]);