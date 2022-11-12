function energyBooster(input) {

    let fruit = (input[0]);
    let setSize = (input[1]);
    let countSet = Number(input[2]);
   
   if (fruit === "Watermelon") {
        
        if (setSize === "small") {
            watermelonPrice = 56;

             setPrice = countSet * 2 * watermelonPrice;
        } else if (setSize === "big") {
                watermelonPrice = 28.70;
                setPrice = countSet * 5 * watermelonPrice;
        }
    } else if (fruit === "Mango") {
        
        if (setSize === "small") {
            mangoPrice = 36.66;
            setPrice = countSet * 2 * mangoPrice;
        } else if (setSize === "big") {
            mangoPrice = 19.60;
            setPrice = countSet * 5 * mangoPrice;
            }        
    } else if (fruit === "Pineapple") {
        
            if (setSize === "small") {
                pineapplePrice = 42.10;
                setPrice = countSet * 2 * pineapplePrice;
            } else if (setSize === "big") {
                pineapplePrice = 24.80;
                setPrice = countSet * 5 * pineapplePrice;
            }
    } else if (fruit === "Raspberry") {
        
            if (setSize === "small") {
                raspberryPrice = 20;
                setPrice = countSet * 2 * raspberryPrice;
                
            } else if (setSize === "big") {
                raspberryPrice = 15.20;
                setPrice = countSet * 5 * raspberryPrice;
            }
    } if (setPrice > 1000) {
        console.log(`${(setPrice / 2).toFixed(2)} lv.`);

    } else if (setPrice >= 400 ) {
        console.log(`${(setPrice * 0.85).toFixed(2)} lv.`);

    } else {
        console.log(`${setPrice.toFixed(2)} lv.`);
    }
}

energyBooster(["Raspberry","small","50"]);