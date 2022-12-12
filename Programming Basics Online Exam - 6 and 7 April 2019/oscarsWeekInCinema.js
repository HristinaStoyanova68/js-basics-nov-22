
//"normal", "luxury", "ultra luxury"
function solve(input) {

    let nameOfMovie = input[0];
    let typeOfHall = input[1];
    let countOfTickets = Number(input[2]);
    let ticketPrice = 0;

    switch (nameOfMovie) {
        case "A Star Is Born":
            if (typeOfHall === "normal") {
                ticketPrice = 7.50;
            } else if (typeOfHall === "luxury") {
                ticketPrice = 10.50;
            } else if (typeOfHall === "ultra luxury") {
                ticketPrice = 13.50;
            }
            break;
        case "Bohemian Rhapsody":
            if (typeOfHall === "normal") {
                ticketPrice = 7.35;
            } else if (typeOfHall === "luxury") {
                ticketPrice = 9.45;
            } else if (typeOfHall === "ultra luxury") {
                ticketPrice = 12.75;
            }
            break;
        case "Green Book":
            if (typeOfHall === "normal") {
                ticketPrice = 8.15;
            } else if (typeOfHall === "luxury") {
                ticketPrice = 10.25;
            } else if (typeOfHall === "ultra luxury") {
                ticketPrice = 13.25;
            }
            break;
        case "The Favourite":
            if (typeOfHall === "normal") {
                ticketPrice = 8.75;
            } else if (typeOfHall === "luxury") {
                ticketPrice = 11.55;
            } else if (typeOfHall === "ultra luxury") {
                ticketPrice = 13.95;
            }
            break;
    }
    let total = countOfTickets * ticketPrice;
    console.log(`${nameOfMovie} -> ${total.toFixed(2)} lv.`);

}

solve(["Green Book",
    "normal",
    "63"]);