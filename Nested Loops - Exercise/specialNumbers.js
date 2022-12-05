function solve(input) {

    let n = Number(input[0]);
    let printLine = "";

    for (let currNum = 1111; currNum <= 9999; currNum++) {

        let result = "";
        let position = 0;

        let currNumStr = currNum.toString();

        for (let i = 0; i < currNumStr.length; i++) {
            let currDigit = Number(currNumStr[i]);
            position = i + 1;

            if (n % currDigit === 0) {
                result += currDigit;
                if (position === 4) {
                    printLine += `${result} `
                }
            } else {
                break;
            }
        }

    } console.log(printLine);
}

solve(["11"]);

