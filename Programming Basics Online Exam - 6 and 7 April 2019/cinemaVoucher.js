function solve(input) {

    let index = 0;
    let voucherValue = Number(input[index]);
    index++;
    let nameOfVoucher = input[index];
    index++;
    let ticketValue = 0;
    let otherValue = 0;
    let purshaseTickets = 0;
    let purshaseOthers = 0;

    while (nameOfVoucher !== "End") {

        let n = nameOfVoucher.length;

        if (n > 8) {
            ticketValue += (nameOfVoucher.charCodeAt(0) + nameOfVoucher.charCodeAt(1));
            if (ticketValue > voucherValue) {
                break;
            } else {
                voucherValue -= ticketValue;
                purshaseTickets++;
            }

        } else {
            otherValue += nameOfVoucher.charCodeAt(0);
            if (otherValue > voucherValue) {
                break;
            } else {
                voucherValue -= otherValue;
                purshaseOthers++;
            }

        }

        nameOfVoucher = input[index];
        index++;
        ticketValue = 0;
        otherValue = 0;
    }
    console.log(`${purshaseTickets}`);
    console.log(`${purshaseOthers}`);

}

solve(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"]);