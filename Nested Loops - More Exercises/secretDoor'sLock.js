function solve(input) {
    let maxHundreds = Number(input[0]);
    let maxDozens = Number(input[1]);
    let maxUnits = Number(input[2]);
    let result = "";

    for (let i = 1; i <= maxHundreds; i++) {
        if (i % 2 === 0) {
            for (let j = 2; j <= maxDozens; j++) {
                let isPrime = true;
                for (let currDivisor = 2; currDivisor < j; currDivisor++) {
                    if (j % currDivisor === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    for (let k = 1; k <= maxUnits; k++) {
                        if (k % 2 === 0) {
                            result = `${i} ${j} ${k}`;
                            console.log(result);
                            result = "";
                        }
                    }
                }
            }
        }
    }

}

solve(["8", "2", "8"]);