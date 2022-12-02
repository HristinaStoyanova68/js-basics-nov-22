function solve(input) {

    let countPeople = Number(input[0]);
    let entryFee = Number(input[1]);
    let chairPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let allEntryFee = countPeople * entryFee;
    let allUmbrellaPrice = (Math.ceil(countPeople / 2)) * umbrellaPrice;
    let allChairPrice = (Math.ceil(countPeople * 0.75)) * chairPrice;

    let total = allEntryFee + allUmbrellaPrice + allChairPrice;
    console.log(`${total.toFixed(2)} lv.`);

}

    solve(["100",
    "8",
    "6",
    "4"])
    ;
