//"Morning", "Afternoon", "Evening

function summerOutfit(input) {

    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    

    if (degrees >= 10 && degrees <= 18) {
        switch (timeOfDay) {
            case "Morning":
                outfit = "Sweatshirt"; 
                shoes = "Sneakers";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Afternoon":
             case "Evening":
                outfit = "Shirt"; 
                shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
                break;
        }

    } else if (degrees > 18 && degrees <= 24) {
        switch (timeOfDay) {
            case "Morning":
                outfit = "Shirt"; 
                shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Afternoon":
                outfit = "T-Shirt"; 
                shoes = "Sandals";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Evening":
                outfit = "Shirt"; 
                shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
                break;
        }

    } else if (degrees >= 25) {
        switch (timeOfDay) {
            case "Morning":
                outfit = "T-Shirt"; 
                shoes = "Sandals";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Afternoon":
                outfit = "Swim Suit"; 
                shoes = "Barefoot";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
                break;
            case "Evening":
                outfit = "Shirt"; 
                shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
                break;
        }

    }


}

summerOutfit(["16", "Evening"]);