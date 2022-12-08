function solve(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let availableFood = Number(input[index]);
    index++;
    let allDogFood = 0;
    let allCatFood = 0;
    let allBiscuits = 0;

    for (let i = 1; i <= days; i++) {

        let currBiscuits = 0;

        let currDogFood = Number(input[index]);
        index++;
        allDogFood += currDogFood;

        let currCatFood = Number(input[index]);
        index++;
        allCatFood += currCatFood;

        if (i % 3 === 0) {
            currBiscuits += (currDogFood + currCatFood) * 0.10;
            allBiscuits += currBiscuits;
        }

    }
    let eatenFood = allDogFood + allCatFood;
    let percentEatenFood = eatenFood / availableFood * 100;
    let percentDogFood = allDogFood / eatenFood * 100;
    let percentCatFood = allCatFood / eatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(allBiscuits)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`);

}

solve(["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"]);