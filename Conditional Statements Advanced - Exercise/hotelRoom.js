function hotelRoom(input){

    let month = input[0];
    let nights = Number(input[1]);
    studioPrice = 0.00;
    appartmentPrice = 0.00;

    switch (month) {
        case "May":
        case "October":
            studioPrice = nights * 50.00;
            appartmentPrice = nights * 65.00;
            if (nights >7 && nights <=14) {
                studioPrice = studioPrice * 0.95;
            } else if (nights > 14) {
                studioPrice = studioPrice * 0.70;
                appartmentPrice = appartmentPrice * 0.90;
            } else {
                studioPrice = studioPrice;
                appartmentPrice = appartmentPrice;
            }
            break;
        case "June":
        case "September":
            studioPrice = nights * 75.20;
            appartmentPrice = nights * 68.70;
            if (nights > 14)  {
                studioPrice = studioPrice * 0.80;
                appartmentPrice = appartmentPrice * 0.90;
            } else {
                studioPrice = studioPrice;
                appartmentPrice = appartmentPrice;

            }
            break;
        case "July":
        case "August":
            studioPrice = nights * 76.00;
            appartmentPrice = nights * 77.00;
            if (nights > 14) {
                appartmentPrice = appartmentPrice * 0.90;
            } else {
                studioPrice = studioPrice;
                appartmentPrice = appartmentPrice;
            }
            break;
            
    } console.log(`Apartment: ${appartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)

}

hotelRoom(["August", "20"]);