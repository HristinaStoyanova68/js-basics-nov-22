function catWalking(input) {

    let walkMinutes = Number(input[0]);
    let counWalk = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let caloriesPerWalk = walkMinutes * 5;
    let burnedCalories = counWalk * caloriesPerWalk;

    if (burnedCalories >= caloriesPerDay / 2) {

        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }


}

catWalking(["40","2","300"]);