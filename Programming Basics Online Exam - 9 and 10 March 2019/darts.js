function solve(input) {

    let index = 0;
    let name = input[index];
    index++;
    let dartsArea = input[index];
    index++;
    let pointsLeft = 301;
    let successCounter = 0;
    let unsuccessCounter = 0;

    while (dartsArea !== "Retire") {

        let currPoints = Number(input[index]);
        index++;

        if (dartsArea === "Single") {
            if (currPoints > pointsLeft) {
                pointsLeft = pointsLeft;
                unsuccessCounter++;
            } else {
                pointsLeft -= currPoints;
                successCounter++;
            }
        } else if (dartsArea === "Double") {
            if (2 * currPoints > pointsLeft) {
                pointsLeft = pointsLeft;
                unsuccessCounter++;
            } else {
                pointsLeft -= 2 * currPoints;
                successCounter++;
            }
        } else if (dartsArea === "Triple") {
            if (3 * currPoints > pointsLeft) {
                pointsLeft = pointsLeft;
                unsuccessCounter++;
            } else {
                pointsLeft -= 3 * currPoints;
                successCounter++;
            }
        }
        if (pointsLeft === 0) {
            console.log(`${name} won the leg with ${successCounter} shots.`);
            return;
        }
        dartsArea = input[index];
        index++;
    } console.log(`${name} retired after ${unsuccessCounter} unsuccessful shots.`);

}


solve(["Rob Cross",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20", "Double",
    "20",
    "Triple",
    "20",
    "Double",
    "5",
    "Triple",
    "10",
    "Double",
    "6",
    "Retire"]);