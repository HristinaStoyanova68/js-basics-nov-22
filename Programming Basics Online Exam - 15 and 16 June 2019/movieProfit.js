function movieProfit(input) {

    let movieName = input[0];
    let days = Number(input[1]);
    let countTickets = Number(input[2]);
    let ticketsPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);

    let allTicketsPrisce = days * countTickets * ticketsPrice;
    let cinemaPrice = allTicketsPrisce * cinemaPercent / 100;

    let movieProfit = allTicketsPrisce - cinemaPrice;

    console.log(`The profit from the movie ${movieName} is ${movieProfit.toFixed(2)} lv.`);


}

movieProfit(["The Jungle",
"22",
"20500",
"9.37",
"30"])

;