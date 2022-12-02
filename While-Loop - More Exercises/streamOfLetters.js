function solve(input) {

    let index = 0;
    let letter = input[index];
    index++;
    let word = "";
    let finalWord = "";

    let c = 0;
    let o = 0;
    let n = 0;
    let cFirstTime = 0;
    let oFirstTime = 0;
    let nFirstTime = 0;

    while (letter !== "End") {
        if (!((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z"))) {
            letter = input[index];
            index++;
            continue;
        }
        if (letter === "c") {
            c++;
            if (c === 1) {
                cFirstTime++;
                if (cFirstTime === 1 && oFirstTime === 1 && nFirstTime === 1) {
                    word += " ";
                    finalWord += word;
                    word = "";
                    c = 0;
                    o = 0;
                    n = 0;
                    cFirstTime = 0;
                    oFirstTime = 0;
                    nFirstTime = 0;
                }
                letter = input[index];
                index++;
                continue;
            } else {
                word += letter;
            }
        } else if (letter === "o") {
            o++;
            if (o === 1) {
                oFirstTime++;
                if (cFirstTime === 1 && oFirstTime === 1 && nFirstTime === 1) {
                    word += " ";
                    finalWord += word;
                    word = "";
                    c = 0;
                    o = 0;
                    n = 0;
                    cFirstTime = 0;
                    oFirstTime = 0;
                    nFirstTime = 0;
                }
                letter = input[index];
                index++;
                continue;
            } else {
                word += letter;
            }
        } else if (letter === "n") {
            n++;
            if (n === 1) {
                nFirstTime++;
                if (cFirstTime === 1 && oFirstTime === 1 && nFirstTime === 1) {
                    word += " ";
                    finalWord += word;
                    word = "";
                    c = 0;
                    o = 0;
                    n = 0;
                    cFirstTime = 0;
                    oFirstTime = 0;
                    nFirstTime = 0;
                }
                letter = input[index];
                index++;
                continue;
            } else {
                word += letter;
            }
        } else {
            word += letter
        }
        letter = input[index];
        index++;
    } console.log(finalWord);
}

solve(["o",
    "S",
    "%",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End"
]);