function solve(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;

    let index = 0;
    let action = input[index];
    index++;



    while (action !== "stop") {
        let currNum = Number(action);

        if (currNum < 0) {
            console.log("Number is negative.");

            action = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let currDivisor = 2; currDivisor < currNum; currDivisor++) {
            if (currNum % currDivisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSum += currNum;
        } else {
            nonPrimeSum += currNum;
        }

        action = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

solve(["0", "-9", "0", "stop"]);