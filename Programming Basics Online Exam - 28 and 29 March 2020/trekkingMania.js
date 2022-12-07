function solve(input) {

    let countGroups = Number(input[0]);
    let musallaPeople = 0;
    let montBlancPeople = 0;
    let kilimanjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;

    for (let i = 1; i <= countGroups; i++) {

        let countOfPeople = Number(input[i]);

        if (countOfPeople <= 5) {
            musallaPeople += countOfPeople;
        } else if (countOfPeople <= 12) {
            montBlancPeople += countOfPeople;
        } else if (countOfPeople <= 25) {
            kilimanjaroPeople += countOfPeople;
        } else if (countOfPeople <= 40) {
            k2People += countOfPeople;
        } else {
            everestPeople += countOfPeople;
        }
    }
    let allPeople = musallaPeople + montBlancPeople + kilimanjaroPeople + k2People + everestPeople;

    let musallaPercent = musallaPeople / allPeople * 100;
    let montBlancPercent = montBlancPeople / allPeople * 100;
    let kilimanjaroPercent = kilimanjaroPeople / allPeople * 100;
    let k2Percent = k2People / allPeople * 100;
    let everestPercent = everestPeople / allPeople * 100;

    console.log(`${musallaPercent.toFixed(2)}%`);
    console.log(`${montBlancPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);

}

solve([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);