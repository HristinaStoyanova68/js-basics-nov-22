function solve(input) {

    let inheritedMoney = Number(input[0]);
    let yearTillStaying = Number(input[1]);
    let sum1 = 0.00;
    let sum2 = 0.00;

    

    for (let i = 1800; i <= yearTillStaying; i ++) {
            currYearForStaying = i;    
        if (currYearForStaying % 2 === 0) {
           sum1 = sum1 + 12000;
        } else {
            
            sum2 = sum2 + (12000 +(((currYearForStaying-1800) + 18) * 50));
        }
    } totalSum = sum1 + sum2;
        if (inheritedMoney >= totalSum) {
            let totalMoneyLeft = inheritedMoney - totalSum;
            console.log(`Yes! He will live a carefree life and will have ${totalMoneyLeft.toFixed(2)} dollars left.`);
        } else {
            let neededMoney = totalSum - inheritedMoney;
            console.log(`He will need ${neededMoney.toFixed(2)} dollars to survive.`);
        }
}

solve(["100000.15", "1808"]);