function solve(input) {

    let index = 0;
    let dishDetergentBottles = Number(input[index]);
    index++;
    let cleanPlates = 0;
    let cleanPots = 0;
    let dishes = input[index];

    let detergent = dishDetergentBottles * 750;
    let detergentUsed = 0;

    while (dishes !== "End") {
        dishes = Number(input[index]);

        if (index % 3 !== 0) {
            cleanPlates += dishes;
        } else {
            cleanPots += dishes;
        }
        detergentUsed = cleanPlates * 5 + cleanPots * 15;

        if (detergentUsed > detergent) {
            break;
        }
        index++;
        dishes = input[index];
    }
    if (detergentUsed > detergent) {
        let detergentNeeded = detergentUsed - detergent;
        console.log(`Not enough detergent, ${detergentNeeded} ml. more necessary!`);
        
    }
    if (detergentUsed <= detergent) {
        let leftoverDetergent = detergent - detergentUsed;
        console.log("Detergent was enough!");
        console.log(`${cleanPlates} dishes and ${cleanPots} pots were washed.`);
        console.log(`Leftover detergent ${leftoverDetergent} ml.`);

    }
}







solve(["1", "10", "15", "10", "12", "13", "30"]);