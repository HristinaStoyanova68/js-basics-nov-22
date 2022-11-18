function aluminumJoinery(input) {

    let joineryCount = Number(input[0]);
    let joineryType = (input[1]);
    let deliveryType = (input[2]);

    joineryPrice = 0.00;
    totalPrice = 0.00;

    if (joineryCount <= 10) {
        console.log(`Invalid order`);
    } else {

        switch (joineryType) {

            case ("90X130" ):
                joineryPrice = joineryCount * 110;
                if (joineryCount > 60) {
                    totalPrice = joineryPrice * 0.92;
                } else if (joineryCount > 30) {
                    totalPrice = joineryPrice * 0.95;
                } else {
                    totalPrice = joineryPrice;
                }
                break;
            case ("100X150" ):
                joineryPrice = joineryCount * 140;
                if (joineryCount > 80) {
                    totalPrice = joineryPrice * 0.90;
                } else if (joineryCount > 40) {
                    totalPrice = joineryPrice * 0.94;
                } else {
                    totalPrice = joineryPrice;
                }
                break;
            case ("130X180" ):
                joineryPrice = joineryCount * 190;
                if (joineryCount > 50) {
                    totalPrice = joineryPrice * 0.88;
                } else if (joineryCount > 20) {
                    totalPrice = joineryPrice * 0.93;
                } else {
                    totalPrice = joineryPrice;
                }
                break;
            case ("200X300"):
                joineryPrice = joineryCount * 250;
                if (joineryCount > 50) {
                    totalPrice = joineryPrice * 0.86;
                } else if (joineryCount > 25) {
                    totalPrice = joineryPrice * 0.91;
                } else {
                    totalPrice = joineryPrice;
                }
                break;
        } if (deliveryType === `With delivery`) {
            totalPrice = totalPrice + 60;
        } else if (deliveryType === `Without delivery`) {
            totalPrice = totalPrice;
        } if (joineryCount > 99) {
            totalPrice = totalPrice * 0.96;
        } console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}    
    aluminumJoinery(["2", "130X180", "With delivery"]); 
