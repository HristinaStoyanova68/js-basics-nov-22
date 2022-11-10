function transportPrice(input) {

    let n = Number(input[0]);
    let periodOfDay = (input[1]);
    let transportPrice = 0.00;
    let taxiRate = 0.00;

    if (periodOfDay === "day") {
        taxiRate = 0.79;
        
    } else {
        taxiRate = 0.90;
    }
    if ( n < 20) {
        transportPrice = 0.70 + (n * taxiRate);
    } else if ( n < 100) {
        transportPrice = n * 0.09;
    } else {
        transportPrice = n * 0.06;
    }
    console.log(transportPrice.toFixed(2));



}

transportPrice(["180","night"]);