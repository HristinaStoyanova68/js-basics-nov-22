function solve(input) {

    let countTournirs = Number(input[0]);
    let startPoints = Number(input[1]);
    
    let t1count = 0;
    let t2count = 0;
    let t3count = 0;
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let i = 1; i <= countTournirs + 1; i ++) {
        let currTournir = input[i];

        if (currTournir === "W") {
            t1count ++; 
            sum1 = t1count * 2000;
        } else if (currTournir === "F") {
            t2count ++;
            sum2 = t2count * 1200; 
        } else if (currTournir === "SF") {
            t3count ++;
            sum3 = t3count * 720;
        }
        totalPoints = startPoints + sum1 + sum2 + sum3;
        averagePoints = (sum1 + sum2 + sum3) / countTournirs;
        percentWinTournirs = t1count / countTournirs * 100;

    } console.log(`Final points: ${totalPoints}`);
      console.log(`Average points: ${Math.floor(averagePoints)}`);
      console.log(`${percentWinTournirs.toFixed(2)}%`);

}

solve(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);