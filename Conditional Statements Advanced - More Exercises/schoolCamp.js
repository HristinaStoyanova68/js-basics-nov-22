function solve(input) {

    let season = input[0];
    let group = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    nightsPrice = students * nights;
    let total = 0;
    let sport = "";

    switch (season) {

        case "Winter":
            if (group === "girls") {
                total = nightsPrice * 9.60;
                sport = "Gymnastics";
            } else if (group === "boys") {
                total = nightsPrice * 9.60;
                sport = "Judo";
            } else if (group === "mixed") {
                total = nightsPrice * 10;
                sport = "Ski";
            }
            break;
        case "Spring":
            if (group === "girls") {
                total = nightsPrice * 7.20;
                sport = "Athletics";
            } else if (group === "boys") {
                total = nightsPrice * 7.20;
                sport = "Tennis";
            } else if (group === "mixed") {
                total = nightsPrice * 9.50;
                sport = "Cycling";
            }
            break;
        case "Summer":
            if (group === "girls") {
                total = nightsPrice * 15;
                sport = "Volleyball";
            } else if (group === "boys") {
                total = nightsPrice * 15;
                sport = "Football";
            } else if (group === "mixed") {
                total = nightsPrice * 20;
                sport = "Swimming";
            }
            break;
    }
    if (students >= 50) {
        total /= 2;
    } else if (students >= 20) {
        total *= 0.85;
    } else if (students >= 10) {
        total *= 0.95;
    } else {
        total = total;
    }
    console.log(`${sport} ${total.toFixed(2)} lv.`);
}

solve(["Winter", "mixed", "9", "15"]);