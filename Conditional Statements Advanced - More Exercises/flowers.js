function solve(input) {

    let chrysanthemumsCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let seasons = input[3];
    let typeOfDay = input[4];

    let chrysanthemumsSum = 0;
    let rosesSum = 0;
    let tulipsSum = 0;

    switch (seasons) {
        case "Spring":
        case "Summer":
            chrysanthemumsSum = chrysanthemumsCount * 2.00;
            rosesSum = rosesCount * 4.10;
            tulipsSum = tulipsCount * 2.50;

            break;
        case "Autumn":
        case "Winter":
            chrysanthemumsSum = chrysanthemumsCount * 3.75;
            rosesSum = rosesCount * 4.50;
            tulipsSum = tulipsCount * 4.15;
            break;
    }
    let totalSum = chrysanthemumsSum + rosesSum + tulipsSum;

    if (typeOfDay === "Y") {
        totalSum = totalSum * 1.15;
    } else if (typeOfDay === "N") {
        totalSum = totalSum;
    }
    if (seasons === "Spring" && tulipsCount > 7) {
        totalSum = totalSum * 0.95;
    }
    if (seasons === "Winter" && rosesCount >= 10) {
        totalSum = totalSum * 0.90;
    }
    if ((chrysanthemumsCount + rosesCount + tulipsCount) > 20) {
        totalSum = totalSum * 0.80;
    }
    let finalSum = totalSum + 2.00;

    console.log(finalSum.toFixed(2));


}




solve(["10", "10", "10", "Autumn", "N"]);