function solve(input) {

    let index = 0;
    let countPeople = Number(input[index]);
    index++;

    let peopleBack = 0;
    let peopleChest = 0;
    let peopleLegs = 0;
    let peopleAbs = 0;
    let peopleProteinShake = 0;
    let peopleProteinBar = 0;

    for (let i = 1; i <= countPeople; i++) {

        let currAction = input[i];

        if (currAction === "Back") {
            peopleBack++;
        } else if (currAction === "Chest") {
            peopleChest++;
        } else if (currAction === "Legs") {
            peopleLegs++;
        } else if (currAction === "Abs") {
            peopleAbs++;
        } else if (currAction === "Protein shake") {
            peopleProteinShake++;
        } else if (currAction === "Protein bar") {
            peopleProteinBar++;
        }

    }
    let percentTraining = (peopleBack + peopleChest + peopleLegs + peopleAbs) / countPeople * 100;
    let percentBayers = (peopleProteinShake + peopleProteinBar) / countPeople * 100;

    console.log(`${peopleBack} - back`);
    console.log(`${peopleChest} - chest`);
    console.log(`${peopleLegs} - legs`);
    console.log(`${peopleAbs} - abs`);
    console.log(`${peopleProteinShake} - protein shake`);
    console.log(`${peopleProteinBar} - protein bar`);
    console.log(`${percentTraining.toFixed(2)}% - work out`);
    console.log(`${percentBayers.toFixed(2)}% - protein`);



}

solve([
    "10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"]);