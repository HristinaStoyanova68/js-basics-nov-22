function solve(input) {

    let numOfBread = Number(input[0]);
    let maxUsedSugar = Number.MIN_SAFE_INTEGER;
    let maxUsedFlour = Number.MIN_SAFE_INTEGER;
    let sugarSum = 0;
    let flourSum = 0;
    
    for (let i = 1; i <= (numOfBread * 2); i += 2) {

        let sugar = Number(input[i]);
        let flour = Number(input[i + 1]);

        sugarSum += sugar;
        flourSum += flour;

        if (sugar > maxUsedSugar) {
            maxUsedSugar = sugar;
        }
        if (flour > maxUsedFlour) {
            maxUsedFlour = flour;
        }
    }
    let sugarPack = sugarSum / 950;
    let flourPack = flourSum / 750;

    console.log(`Sugar: ${Math.ceil(sugarPack)}`);
    console.log(`Flour: ${Math.ceil(flourPack)}`);
    console.log(`Max used flour is ${maxUsedFlour} grams, max used sugar is ${maxUsedSugar} grams.`);

}

solve(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"]);