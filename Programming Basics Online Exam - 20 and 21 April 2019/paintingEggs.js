// •	Първи ред – размер на яйцата – текст с възможности "Large", "Medium" или "Small"
// •	Втори ред – цвят на яйцата – текст  с възможности "Red", "Green" или "Yellow"
// •	Трети ред – брой партиди – цяло число в интервала [1… 350]

function paintingEggs(input) {

    let sizeOfEggs = input[0];
    let colorOfEggs = input[1];
    let countEggLot = Number(input[2]);
    let totalLotSum = 0.00;
    let totalSum = 0.00;

    switch (colorOfEggs) {
        case "Red":
            if (sizeOfEggs === "Large") {
                totalLotSum = countEggLot * 16;
            } else if (sizeOfEggs === "Medium") {
                totalLotSum = countEggLot * 13;
            } else if (sizeOfEggs === "Small") {
                totalLotSum = countEggLot * 9;
            }
            break;
        case "Green":
            if (sizeOfEggs === "Large") {
            totalLotSum = countEggLot * 12;
        } else if (sizeOfEggs === "Medium") {
            totalLotSum = countEggLot * 9;
        } else if (sizeOfEggs === "Small") {
            totalLotSum = countEggLot * 8;
        }
            break;
        case "Yellow":
            if (sizeOfEggs === "Large") {
                totalLotSum = countEggLot * 9;
            } else if (sizeOfEggs === "Medium") {
                totalLotSum = countEggLot * 7;
            } else if (sizeOfEggs === "Small") {
                totalLotSum = countEggLot * 5;
            }
            break;
    }
                totalSum = totalLotSum * 0.65;
                console.log(`${totalSum.toFixed(2)} leva.`);

}

paintingEggs(["Large", "Red", "7"]);
