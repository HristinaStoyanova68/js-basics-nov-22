function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let countWorkers = Number(input[3]);

    let harvest = x * y;
    let harvestForWine = harvest * 0.40;
    let allWine = harvestForWine / 2.5;
    
    if (allWine >= z) {
        let wineLeft = allWine - z;
        let winePerWorker = wineLeft / countWorkers;

        console.log(`Good harvest this year! Total wine: ${Math.floor(allWine)} liters.`);
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);

    } else {
        let wineNeeded = z - allWine;
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded)} liters wine needed.`)
    }


}

harvest(["1020","1.5","425","4"]);