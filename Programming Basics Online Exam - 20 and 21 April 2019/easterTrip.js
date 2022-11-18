// •	Първи ред - дестинация - текст с възможности"France", "Italy" или "Germany"
// •	Втори ред - дати, през които си е резервирала екскурзията - текст  с възможности "21-23", 
// "24-27" или "28-31"
// •	Трети ред - брой нощувки - цяло число в интервала [1… 100]

function easterTrip(input) {

    let destination = input[0];
    let dates = input[1];
    let nights = Number(input[2]);
    let tripPrice = 0.00;

    switch (destination) {
        case "France":
            if (dates === "21-23") {
                tripPrice = nights * 30;
            } else if (dates === "24-27") {
                tripPrice = nights * 35;
            } else if (dates === "28-31") {
                tripPrice = nights * 40;
            }
            break;
        case "Italy":if (dates === "21-23") {
            tripPrice = nights * 28;
        } else if (dates === "24-27") {
            tripPrice = nights * 32;
        } else if (dates === "28-31") {
            tripPrice = nights * 39;
        }
            break;
        case "Germany":if (dates === "21-23") {
            tripPrice = nights * 32;
        } else if (dates === "24-27") {
            tripPrice = nights * 37;
        } else if (dates === "28-31") {
            tripPrice = nights * 43;
        }
            break;
    } console.log(`Easter trip to ${destination} : ${tripPrice.toFixed(2)} leva.`);


}

easterTrip(["France", "28-31", "8"]);