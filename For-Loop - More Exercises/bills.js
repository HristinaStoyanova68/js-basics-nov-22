function solve(input) {

    let months = Number(input[0]);
    let electricitySum = 0.00;
    
    for (let i = 1; i <= months; i ++) {
        
        electricitySum = electricitySum + Number(input[i]);
    }   
        waterSum = months * 20.00;
        internetSum = months * 15.00;
        otherSum = (electricitySum + waterSum + internetSum) * 1.20;
        totalSum = electricitySum + waterSum + internetSum + otherSum;
        averageSum = totalSum / months;
    console.log(`Electricity: ${electricitySum.toFixed(2)} lv`);
    console.log(`Water: ${waterSum.toFixed(2)} lv`);
    console.log(`Internet: ${internetSum.toFixed(2)} lv`);
    console.log(`Other: ${otherSum.toFixed(2)} lv`);
    console.log(`Average: ${averageSum.toFixed(2)} lv`);


}

solve(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);