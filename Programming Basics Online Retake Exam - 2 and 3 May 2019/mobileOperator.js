function mobileOperator(input) {

    let termOfContract = input[0];
    let typeOfContract = input[1];
    let addMobData = input[2];
    let countMonth = Number(input[3]);
    let fee = 0.00;
    let totalSum = 0.00;

    switch ( termOfContract) {
        case "one":
            if (typeOfContract === "Small") {
                fee = 9.98;
            } else if (typeOfContract === "Middle") {
                fee = 18.99;
            } else if (typeOfContract === "Large") {
                fee = 25.98;
            } else if (typeOfContract === "ExtraLarge") {
                fee = 35.99;
            } 
                break;
        case "two":
            if (typeOfContract === "Small") {
                fee = 8.58;
            } else if (typeOfContract === "Middle") {
                fee = 17.09;
            } else if (typeOfContract === "Large") {
                fee = 23.59;
            } else if (typeOfContract === "ExtraLarge") {
                fee = 31.79;
            }
                break;
            
    } if (addMobData === "yes") {
        if (fee <= 10) {
            totalSum = countMonth * (fee + 5.50);
        } else if (fee <= 30) {
            totalSum = countMonth * (fee + 4.35);
        } else {
            totalSum = countMonth * (fee + 3.85);
        }
    } else if (addMobData === "no") {
        totalSum = countMonth * fee;
    } 
        if (termOfContract === "two") {
            totalSum = totalSum * 0.9625;
    }
    
    console.log(`${totalSum.toFixed(2)} lv.`);
}

mobileOperator(["two",
"Small",
"yes",
"20"])


;