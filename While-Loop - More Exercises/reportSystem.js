function solve(input) {

    let index = 0;
    let neededSum = Number(input[index]);
    index++;
    let currSum = input[index];
    let sumCS = 0;
    let sumCC = 0;
    let sumCSCount = 0;
    let sumCCCount = 0;
    let totalSum = 0;

    while (currSum !== "End") {
        currSum = Number(input[index]);
        if (index % 2 !== 0) {
            if (currSum > 100) {
                console.log("Error in transaction!");

            } else {
                console.log("Product sold!");
                sumCS += currSum;
                sumCSCount++;
            } index++;
            currSum = input[index];
        } else {
            if (currSum < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                sumCC += currSum;
                sumCCCount++;
            }
            totalSum = sumCS + sumCC;
            if (totalSum >= neededSum) {
                break;
            }
            index++;
            currSum = input[index];

        }
    } if (currSum === "End") {
        console.log("Failed to collect required money for charity.");
        return;
    }
    let averageCS = sumCS / sumCSCount;
    let averageCC = sumCC / sumCCCount;
    console.log(`Average CS: ${averageCS.toFixed(2)}`);
    console.log(`Average CC: ${averageCC.toFixed(2)}`);

}

solve(["600", "86", "150", "98", "227", "End"]);