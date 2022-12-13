function solve(input) {

    let index = 0;
    let nCountBalls = Number(input[index]);
    index++;
    let color = input[index];
    index++;
    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let othersBalls = 0;


    for (let i = 1; i <= nCountBalls; i++) {

        if (color === "red") {
            redBalls++;
            totalPoints += 5;
        } else if (color === "orange") {
            orangeBalls++;
            totalPoints += 10;
        } else if (color === "yellow") {
            yellowBalls++;
            totalPoints += 15;
        } else if (color === "white") {
            whiteBalls++;
            totalPoints += 20;
        } else if (color === "black") {
            blackBalls++;
            totalPoints = Math.floor(totalPoints / 2);
        } else {
            othersBalls++;
        }


        color = input[index];
        index++;
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${othersBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);

}

solve(["10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"]);