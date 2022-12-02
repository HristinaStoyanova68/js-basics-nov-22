function solve(input) {
    let index = 1;
    let currNum = Number(input[index]);
    let sum = 0;
    let numCount = 0;
    
    while (index < input.length) {
        currNum = Number(input[index]);
        index ++;
        sum += currNum;
        numCount ++;
        
    }
    let averageSum = sum / numCount;
    console.log(averageSum.toFixed(2));
}

solve(["3", "82", "43", "22"]);
