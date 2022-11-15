// "Bulgaria", "Balkans" и "Europe
//"Camp" и "Hotel"
//"summer" или "winter

function journey(input) {
    
    let budget = Number(input[0]);
    let season = input[1];
    destination = "name";
    typeOfJourney = "type";
    price = 0.00;
    switch (season) {
        case "summer":
            if (budget <= 100) {
                destination = "Bulgaria";
                typeOfJourney = "Camp";
                price = budget * 0.30;
            } else if(budget <= 1000) {
                destination = "Balkans";
                typeOfJourney = "Camp";
                price = budget * 0.40;
            } else {
                destination = "Europe";
                typeOfJourney = "Hotel";
                price = budget * 0.90;
            }
            break;
        case "winter":
            if (budget <= 100) {
                destination = "Bulgaria";
                typeOfJourney = "Hotel";
                price = budget * 0.70;
            } else if(budget <= 1000) {
                destination = "Balkans";
                typeOfJourney = "Hotel";
                price = budget * 0.80;
            } else {
                destination = "Europe";
                typeOfJourney = "Hotel";
                price = budget * 0.90;
            }
            break;
    } console.log(`Somewhere in ${destination}`);
        console.log(`${typeOfJourney} - ${price.toFixed(2)}`); 
        
        

}

journey(["1500", "summer"]);