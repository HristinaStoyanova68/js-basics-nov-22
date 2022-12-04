function solve(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = "";


    for (let currNum = startNum; currNum <= endNum; currNum++) {
        let currNumStr = currNum.toString();

        let oddSum = 0;
        let evenSum = 0;

        for (let i = 0; i < currNumStr.length; i++) {
            let currDigit = Number(currNumStr[i]);
            let position = i + 1;

            if (position % 2 === 0) {
                evenSum += currDigit;
            } else {
                oddSum += currDigit;
            }

        }
        if (oddSum === evenSum) {
            result += `${currNumStr} `
        }

    }
    console.log(result);

}

solve(["100000",

    "100050"]);