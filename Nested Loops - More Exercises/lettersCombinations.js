function solve(input) {

    let letter1 = input[0].charCodeAt();
    let letter2 = input[1].charCodeAt();
    let letter3 = input[2].charCodeAt();
    let result = "";
    let counter = 0;

    for (let i = letter1; i <= letter2; i++) {
        if (i === letter3) {
            continue;
        }
        for (let j = letter1; j <= letter2; j++) {
            if (j === letter3) {
                continue;
            }
            for (let k = letter1; k <= letter2; k++) {
                if (k === letter3) {
                    continue;
                }
                result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " ";
                counter++;
            }
        }

    }
    result += counter;
    console.log(result);

}

solve(["a", "c", "z"]);