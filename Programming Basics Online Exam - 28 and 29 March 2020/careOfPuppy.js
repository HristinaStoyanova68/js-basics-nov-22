function solve(input) {

    let index = 0;
    let availableFoodKg = Number(input[index]);
    index++;
    let foodPerEating = input[index];

    let allEatingFood = 0;
    let availableFoodGr = availableFoodKg * 1000;

    while (foodPerEating !== "Adopted") {
        foodPerEating = Number(input[index]);
        index++;
        allEatingFood += foodPerEating;

        foodPerEating = input[index];

    }
    if (availableFoodGr >= allEatingFood) {
        let leftFood = availableFoodGr - allEatingFood;
        console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
    } else {
        let neededFood = allEatingFood - availableFoodGr;
        console.log(`Food is not enough. You need ${neededFood} grams more.`);
    }
}

solve(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"]);