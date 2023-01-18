function theSongOfTheWheels(input) {
    let m = Number(input[0]);
    let result = "";
    let counterResult = 0;
    let password = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d) {
                        let currNum = a * b + c * d;
                        if (currNum === m) {
                            result += `${a}${b}${c}${d} `;
                            counterResult++;
                            if (counterResult === 4) {
                                password = `${a}${b}${c}${d}`;
                            }

                        }
                    }
                }
            }
        }
    }
    if (result === "") {
        console.log(`No!`);
    } else {
        console.log(result);
        if (password === "") {
            console.log(`No!`);
        } else {
            console.log(`Password: ${password}`);
        }
    }
}

theSongOfTheWheels(["55"]);