function solve(input) {

    let index = 0;
    let seats = Number(input[index]);
    index++;
    let entryPeople = input[index];

    let sum = 0;
    let totalSum = 0;

    while (entryPeople !== "Movie time!") {

        entryPeople = Number(input[index]);
        index++;

        if (entryPeople <= seats) {
            seats -= entryPeople;
            sum = entryPeople * 5;
            if (entryPeople % 3 === 0) {
                sum -= 5;
            }
            totalSum += sum;

        } else {
            console.log("The cinema is full.");
            console.log(`Cinema income - ${totalSum} lv.`);
            return;
        }
        entryPeople = input[index];
        sum = 0;

    }
    if (seats >= 0) {
        console.log(`There are ${seats} seats left in the cinema.`);
    } else {
        console.log("The cinema is full.");
    }
    console.log(`Cinema income - ${totalSum} lv.`);


}

solve(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"]);