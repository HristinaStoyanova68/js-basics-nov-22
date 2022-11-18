function worldSnookerChampionship(input) {

    let typeOfFinal = input[0];
    let typeOfTicket = input[1];
    let countTickets = Number(input[2]);
    let optionForPhoto = input[3];
    let totalSum = 0.00;

    switch (typeOfFinal) {
        case "Quarter final":
            if (typeOfTicket === "Standard") {
                totalSum = countTickets * 55.50;
            } else if (typeOfTicket === "Premium") {
                totalSum = countTickets * 105.20;
            } else if (typeOfTicket === "VIP") {
                totalSum = countTickets * 118.90;
            }
            break;
        case "Semi final":
            if (typeOfTicket === "Standard") {
                totalSum = countTickets * 75.88;
            } else if (typeOfTicket === "Premium") {
                totalSum = countTickets * 125.22;
            } else if (typeOfTicket === "VIP") {
                totalSum = countTickets * 300.40;
            }
            break;
        case "Final":
            if (typeOfTicket === "Standard") {
                totalSum = countTickets * 110.10;
            } else if (typeOfTicket === "Premium") {
                totalSum = countTickets * 160.66;
            } else if (typeOfTicket === "VIP") {
                totalSum = countTickets * 400.00;
            }
            break;
    } if (totalSum > 4000){
        totalSum = totalSum * 0.75;
    } else if (totalSum >= 2500 && totalSum <= 4000) {
        if (optionForPhoto === "Y") {
            totalSum = totalSum * 0.90 + countTickets * 40;
        } else if (optionForPhoto === "N") {
            totalSum = totalSum * 0.90;
        }
    } else {
        if (optionForPhoto === "Y") {
            totalSum = totalSum + countTickets * 40;
        } else if (optionForPhoto === "N") {
            totalSum = totalSum;
        }
    }
    console.log(totalSum.toFixed(2));
}

worldSnookerChampionship(["Quarter final",
"Standard",
"11",
"N"])

;

