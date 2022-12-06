function solve(input) {

    let n = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let row = 1; row <= n; row++) {

        for (let column = 1; column <= row; column++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;

        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }

}

solve(["12"]);