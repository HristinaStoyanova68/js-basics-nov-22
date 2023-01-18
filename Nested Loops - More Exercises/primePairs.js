function primePairs(input) {
    let firstPair = Number(input[0]);
    let secondPair = Number(input[1]);
    let firstDiff = Number(input[2]);
    let secondDiff = Number(input[3]);

    for (let i = firstPair; i <= firstPair + firstDiff; i++) {
        let isPrimeI = true;
        for (let currDivisor = 2; currDivisor < i; currDivisor++) {
            if (i % currDivisor === 0) {
                isPrimeI = false;
                break;
            }
        }
        if (isPrimeI) {
            for (let j = secondPair; j <= secondPair + secondDiff; j++) {
                let isPrimeJ = true;
                for (let currDivisor = 2; currDivisor < j; currDivisor++) {
                    if (j % currDivisor === 0) {
                        isPrimeJ = false;
                        break;
                    }
                }
                if (isPrimeJ) {
                    if (isPrimeI && isPrimeJ) {
                        console.log(`${i}${j}`);
                    }
                }
            }
        }
    }

}

primePairs(["10", "30", "9", "6"]);