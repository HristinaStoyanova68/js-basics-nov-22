

function pets(input) {

    let dayCount = Number(input[0]);
    let allFood = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]) / 1000;

    let petsFoodPerDay= dogFood + catFood + turtleFood;
    let allPetsFood = dayCount * petsFoodPerDay;

    if (allFood >= allPetsFood) {
        let leftFood = allFood - allPetsFood;
        console.log(`${Math.floor(leftFood)} kilos of food left.`);
    } else {
        let neededFood = allPetsFood - allFood;
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);

    }

}

pets(["5","10","2.1","0.8","321"]);
