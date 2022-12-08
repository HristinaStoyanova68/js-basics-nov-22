function solve(input) {

    let index = 0;
    let numOfTourn = Number(input[index]);
    index++;
    let startScore = Number(input[index]);
    index++;
    let currRound = "";
    let currScore = 0;
    let winCounter = 0;


    for (let i = 1; i <= numOfTourn; i++) {
        currRound = input[index];
        //index ++;
        if (currRound === "W") {
            currScore += 2000;
            winCounter++;
        } else if (currRound === "F") {
            currScore += 1200;
        } else if (currRound === "SF") {
            currScore += 720;
        }
        currRound = "";
        index++;
    }
    let finalScore = currScore + startScore;
    let averageScore = currScore / numOfTourn;
    let percent = winCounter / numOfTourn * 100;

    console.log(`Final points: ${finalScore}`);
    console.log(`Average points: ${Math.floor(averageScore)}`);
    console.log(`${percent.toFixed(2)}%`);


}

solve(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"]);