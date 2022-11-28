function solve(input) {
    let index = 0;
    
    let moneyNeeded = Number(input[index]);
    index ++;
    let moneyAvailable = Number(input[index]);
    index ++;

    let action = input[index];
    index ++;
    let sum = Number(input[index]);
    index ++;

    let daySpentCount = 0;
    let totalDays = 0;

    while (moneyAvailable < moneyNeeded) {

        totalDays ++;

        if (action === "spend") {
            if (sum > moneyAvailable) {
                moneyAvailable = 0;
            } else {
                moneyAvailable -= sum;}
                daySpentCount ++;
        } else if (action === "save") {
            moneyAvailable += sum;
            daySpentCount = 0;
        }

        if (daySpentCount === 5) {
            console.log(`You can't save the money.`);
            console.log(totalDays);
            return;
        }

        action = input[index];
        index ++;

        sum = Number(input[index]);
        index ++;
    }
        console.log(`You saved the money for ${totalDays} days.`);

}






solve(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);