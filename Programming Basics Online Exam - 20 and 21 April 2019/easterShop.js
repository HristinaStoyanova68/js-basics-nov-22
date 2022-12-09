function solve(input) {
    let index = 0;
    let numOfEggs = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let counterBuyEggs = 0;
    let isNotEnough = false;
    let eggsLeft = 0;

    while (action !== "Close") {

        let currEggs = Number(input[index]);
        index++;

        if (action === "Buy") {
            counterBuyEggs += currEggs;
            numOfEggs -= currEggs;

            if (numOfEggs < 0) {
                isNotEnough = true;
                eggsLeft = currEggs + numOfEggs;
                break;
            }

        } else if (action === "Fill") {
            numOfEggs += currEggs;
        }

        action = input[index];
        index++;

    }
    if (isNotEnough) {
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${eggsLeft}.`);
    } else {
        console.log("Store is closed!");
        console.log(`${counterBuyEggs} eggs sold.`);
    }
}

solve(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"]);