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


        switch (color) {
            case "red":
                redBalls++;
                totalPoints += 5;
                break;
            case "orange":
                orangeBalls++;
                totalPoints += 10;
                break;
            case "yellow":
                yellowBalls++;
                totalPoints += 15;
                break;
            case "white":
                whiteBalls++;
                totalPoints += 20;
                break;
            case "black":
                blackBalls++;
                totalPoints = Math.floor(totalPoints / 2);
                break;
            default:
                othersBalls++;
                break;
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