// "room for one person" – 18.00 лв за нощувка

// § "apartment" – 25.00 лв за нощувка

// § "president apartment" – 35.00 лв за нощувка

function skiTrip(input) {

    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];
    price = 0.00;
    totalPrice = 0.00;
    //"room for one person", "apartment" или "president apartment"
    switch (typeOfRoom) {
        case "room for one person":
                price = (days - Number(1)) * 18.00;
            break;
        case "apartment":
            if (days < 10) {
                price = (days - Number(1)) * 25.00 * 0.70;
            } else if (days < 15) {
                price = (days - Number(1)) * 25.00 * 0.65;

            } else {
                price = (days - Number(1)) * 25.00 / 2;
            }
                break;
        case "president apartment":
            if (days < 10) {
                price = (days - Number(1)) * 35.00 * 0.90;
            } else if (days < 15) {
                price = (days - Number(1)) * 35.00 * 0.85;

            } else {
                price = (days - Number(1)) * 35.00 * 0.80;
            }
            break;

    } if (rating === "positive") {
        totalPrice = price * 1.25;
        console.log(totalPrice.toFixed(2));

    } else if (rating === "negative") {
        totalPrice = price * 0.90;
        console.log(totalPrice.toFixed(2));
    }

}

skiTrip(["2", "apartment", "positive"]);