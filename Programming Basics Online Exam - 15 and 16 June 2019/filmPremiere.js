function filmPremiere(input) {

    let movieName = input[0];
    let packetForMovie = input[1];
    let countTickets = Number(input[2]);
    let totalSum = 0.00;

    switch(movieName) {
        case "John Wick":
            if (packetForMovie === "Drink") {
                totalSum = countTickets * 12.00;
            } else if (packetForMovie === "Popcorn") {
                totalSum = countTickets * 15.00;
            } else if (packetForMovie === "Menu") {
                totalSum = countTickets * 19.00;
            }
            break;
        case "Star Wars":
            if (packetForMovie === "Drink") {
                totalSum = countTickets * 18.00;
            } else if (packetForMovie === "Popcorn") {
                totalSum = countTickets * 25.00;
            } else if (packetForMovie === "Menu") {
                totalSum = countTickets * 30.00;
            } if (countTickets >= 4) {
                totalSum = totalSum * 0.70;
            } 
            break;
        case "Jumanji":
            if (packetForMovie === "Drink") {
            totalSum = countTickets * 9.00;
        } else if (packetForMovie === "Popcorn") {
            totalSum = countTickets * 11.00;
        } else if (packetForMovie === "Menu") {
            totalSum = countTickets * 14.00;
        } if (countTickets === 2) {
            totalSum = totalSum * 0.85;
        }
            break;
    } console.log(`Your bill is ${totalSum.toFixed(2)} leva.`);

}

filmPremiere(["Jumanji", "Popcorn", "1"]);


