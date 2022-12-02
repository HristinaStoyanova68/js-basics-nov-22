function solve(input) {

    let num = Number(input[0]);
    let currNum = 0;
    let sum = 0;
    let numCount = 0;
    let averageSum = 0;

    for (let i = 1; i <= num; i ++) {
        currNum = Number(input[i]);
        numCount ++;
        sum += currNum;

    } averageSum = sum / numCount;
    console.log(averageSum.toFixed(2));

}

solve(["4", "95", "23", "76", "23"]);