function solve(input) {

    let index = 0;
    let nameOfMovie = input[index];
    index++;

    let studentTicketsCount = 0;
    let standardTicketsCount = 0;
    let kidsTicketsCount = 0;

    while (nameOfMovie !== "Finish") {
        let availableSpaces = Number(input[index]);
        index++;
        let tipeOfTickets = input[index];
        index++;

        let spacesTaken = 0;

        while (tipeOfTickets !== "End") {

            spacesTaken += 1;
            if (tipeOfTickets === "student") {
                studentTicketsCount++;
            } else if (tipeOfTickets === "standard") {
                standardTicketsCount++;
            } else if (tipeOfTickets === "kid") {
                kidsTicketsCount++;
            }
            if (spacesTaken === availableSpaces) {
                break;
            }
            tipeOfTickets = input[index];
            index++;
        }
        let percentFull = (spacesTaken / availableSpaces) * 100;
        console.log(`${nameOfMovie} - ${percentFull.toFixed(2)}% full.`);

        nameOfMovie = input[index];
        index++;
    }
    let totalTickets = standardTicketsCount + studentTicketsCount + kidsTicketsCount;
    console.log(`Total tickets: ${totalTickets}`);
    let percentStudentTickets = (studentTicketsCount / totalTickets) * 100;
    let percentStandardTickets = (standardTicketsCount / totalTickets) * 100;
    let percentKidsTickets = (kidsTicketsCount / totalTickets) * 100;

    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidsTickets.toFixed(2)}% kids tickets.`);


}

solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);