function solve(input) {

    let index = 0;
    let currName = input[index];
    index++;
    let maxScore = Number.MIN_SAFE_INTEGER;
    let bestPlayer = "";

    while (currName !== "END") {

        let currScore = Number(input[index]);
        index++;
        if (currScore > maxScore) {
            maxScore = currScore;
            bestPlayer = currName;
            if (maxScore >= 10) {
                break;
            }
        }
        currName = input[index];
        index++;
    }
    console.log(`${bestPlayer} is the best player!`);
    if (maxScore >= 3) {
        console.log(`He has scored ${maxScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxScore} goals.`);
    }

}

solve(["Silva",
"5",
"Harry Kane",
"10"])