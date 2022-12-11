function solve(input) {

    let index = 0
    let name = input[index];
    index++;
    let matches = Number(input[index]);
    index++;
    let score = 0;
    let resW = 0;
    let resD = 0;
    let resL = 0;

    if (matches === 0) {
        console.log(`${name} hasn't played any games during this season.`);
        return;
        
    } else {
        for (let i = 1; i <= matches; i++) {
        let currResult = input[index];
        index++;

        
            if (currResult === "W") {
                score += 3;
                resW++;
            } else if (currResult === "D") {
                score += 1;
                resD++;
            } else if (currResult === "L") {
                resL++;
            }
        
    }
}
    let winRate = resW / matches * 100;
    console.log(`${name} has won ${score} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${resW}`);
    console.log(`## D: ${resD}`);
    console.log(`## L: ${resL}`);
    console.log(`Win rate: ${winRate.toFixed(2)}%`);
}

solve(["Chelsea",
"0"]);