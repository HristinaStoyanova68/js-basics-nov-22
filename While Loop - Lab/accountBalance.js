function solve(input) {

    let index = 0;
    let sum = input[index];
    let totalSum = 0;
    
    while (sum !== "NoMoreMoney") {
        sum = Number(input[index]);
        index ++;
        if (sum < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            console.log(`Increase: ${sum.toFixed(2)}`);
        }
        totalSum += sum;
        sum = input[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
    
}
solve(["120", "45.55", "-150"]);