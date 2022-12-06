function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let carPrice = 0;
    let typeOfClass = "";
    let typrOfCar = "";


    switch (season) {
        case "Summer":
            if (budget <= 100) {
                carPrice = budget * 0.35;
                typeOfClass = "Economy class";
                typrOfCar = "Cabrio";
            } else if (budget <= 500) {
                carPrice = budget * 0.45;
                typeOfClass = "Compact class";
                typrOfCar = "Cabrio";
            } else if (budget > 500) {
                carPrice = budget * 0.90;
                typeOfClass = "Luxury class";
                typrOfCar = "Jeep";
            }
            break;
        case "Winter":
            if (budget <= 100) {
                carPrice = budget * 0.65;
                typeOfClass = "Economy class";
                typrOfCar = "Jeep";
            } else if (budget <= 500) {
                carPrice = budget * 0.80;
                typeOfClass = "Compact class";
                typrOfCar = "Jeep";
            } else if (budget > 500) {
                carPrice = budget * 0.90;
                typeOfClass = "Luxury class";
                typrOfCar = "Jeep";
            }
            break;
    }
    console.log(typeOfClass);
    console.log(`${typrOfCar} - ${carPrice.toFixed(2)}`);

}

solve(["70.50", "Winter"]);