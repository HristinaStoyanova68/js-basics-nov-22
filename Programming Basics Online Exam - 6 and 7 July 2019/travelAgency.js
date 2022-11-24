function travelAgency(input) {

    let town = input[0];
    let typeOfPacket = input[1];
    let cardOfVip = input[2];
    let daysOfStaying = Number(input[3]);
    let dayPrice = 0.00;
    
    let invalidCase = false;

    switch (town) {

        
        case "Bansko":
            
        case "Borovets":
            
            if (typeOfPacket === "withEquipment") {
                dayPrice = 100.00;
                if (cardOfVip === "yes") {
                dayPrice = dayPrice * 0.90;
                } 
            } else if (typeOfPacket === "noEquipment") {
                dayPrice = 80.00;
             if (cardOfVip === "yes") {
                dayPrice = dayPrice * 0.95;
            } 
            } else {
                //invalidCase = true;
                console.log(`Invalid input!`);
                invalidCase = true;
            }
            break;
           
        case "Varna":
           
        case "Burgas":
            
            if (typeOfPacket === "withBreakfast") {
                dayPrice = 130.00;
                if (cardOfVip === "yes") {
                dayPrice = dayPrice * 0.88;
                } 
            } else if (typeOfPacket === "noBreakfast") {
                dayPrice = 100.00;
             if (cardOfVip === "yes") {
                dayPrice = dayPrice * 0.93;
                } 
            } else {
                //invalidCase = true;
                console.log(`Invalid input!`);
                invalidCase = true;
            }
            break;
            default:
                //invalidCase = true;
                console.log(`Invalid input!`);
                invalidCase = true;
                break;
            
    } if (daysOfStaying > 7) {
        daysOfStaying = daysOfStaying - 1;
    } let sum = daysOfStaying * dayPrice;

    if (invalidCase === false) {
        if (daysOfStaying >= 1) {
            console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`); 
        } else {
            console.log(`Days must be positive number!`); 
        }
    }
}
    
   

travelAgency(["Burgas",
"noBreakfast",
"no",
"4"])
;