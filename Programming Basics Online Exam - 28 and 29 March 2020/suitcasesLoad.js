function solve(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let suitcaseVolume = Number(input[index]);
    index++;
    let counter = 0;
    let currsuitcaseVolume = 0;

    while (suitcaseVolume !== "End") {

        currsuitcaseVolume = Number(suitcaseVolume);

        
        counter++;
        if (counter === 3) {
            currsuitcaseVolume *= 1.10;
        }
        if (capacity < currsuitcaseVolume) {
            console.log("No more space!");
            console.log(`Statistic: ${counter - 1} suitcases loaded.`);
            return;
        }

        capacity -= currsuitcaseVolume;

        suitcaseVolume = input[index];
        index++;
    }
    
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${counter} suitcases loaded.`);
    

}

solve(["700.5",
"180",
"340.6",
"126",
"220"]);