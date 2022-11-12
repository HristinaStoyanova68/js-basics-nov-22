


function agencyProfit(input) {

    let name = (input[0]);
    let countTicketsAdults = Number(input[1]);
    let countTicketsChildren = Number(input[2]);
    let netPriceAdultTicket = Number(input[3]);
    let fee = Number(input[4]);

    let netPriceChildTicket =netPriceAdultTicket - (netPriceAdultTicket * 0.70);
    let priceAdultTicket = netPriceAdultTicket + fee;
    let priceChildTicket = netPriceChildTicket + fee;

    let allTicketsPrice = (countTicketsAdults * priceAdultTicket) + (countTicketsChildren * priceChildTicket);
    let profit = allTicketsPrice * 0.20;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)

}

agencyProfit(["WizzAir","15","5","120","40"]);