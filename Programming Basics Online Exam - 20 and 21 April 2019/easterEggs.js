function solve(input) {

    let numOfEggs = Number(input[0]);
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;

    let maxEggs = Number.MIN_SAFE_INTEGER;
    let maxColour

    for (let i = 1; i <= numOfEggs; i++) {

        let currEgg = input[i];

        if (currEgg === "red") {
            redEggs++;
            if (redEggs > maxEggs) {
                maxEggs = redEggs;
                maxColour = currEgg;
            }
        } else if (currEgg === "orange") {
            orangeEggs++;
            if (orangeEggs > maxEggs) {
                maxEggs = orangeEggs;
                maxColour = currEgg;
            }
        } else if (currEgg === "blue") {
            blueEggs++;
            if (blueEggs > maxEggs) {
                maxEggs = blueEggs;
                maxColour = currEgg;
            }
        } else if (currEgg === "green") {
            greenEggs++;
            if (greenEggs > maxEggs) {
                maxEggs = greenEggs;
                maxColour = currEgg;
            }
        }
    }
    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxColour}`);


}

solve(["4",
    "blue",
    "red",
    "blue",
    "orange"]);