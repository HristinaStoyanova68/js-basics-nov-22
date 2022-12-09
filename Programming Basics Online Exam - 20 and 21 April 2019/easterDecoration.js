function solve(input) {

    let index = 0;
    let customers = Number(input[index]);
    index++;
    
    let allSum = 0;

    for (let i = 1; i <= customers; i++) {
        let purchase = input[index];
        index++;
        let countPurshases = 0;
        let totalSum = 0;
        
        while (purchase !== "Finish") {

            if (purchase === "basket") {
                totalSum += 1.50;
                countPurshases++;
            } else if (purchase === "wreath") {
                totalSum += 3.80;
                countPurshases++;
            } else if (purchase === "chocolate bunny") {
                totalSum += 7.00;
                countPurshases++;
            }
            purchase = input[index];
            index++;
        }
        if (countPurshases % 2 === 0) {
            totalSum = totalSum * 0.80;
        }
        console.log(`You purchased ${countPurshases} items for ${totalSum.toFixed(2)} leva.`);
        allSum += totalSum;

    }
    let averageSum = allSum / customers;
    console.log(`Average bill per client is: ${averageSum.toFixed(2)} leva.`);


}

solve(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"]);