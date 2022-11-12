//(banana / apple / orange / grapefruit / kiwi / pineapple / grapes
//Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday


function fruitShop(input) {

    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
    
    


    if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
        if (fruit === "banana") {
            fruitPrice = 2.50;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "apple") {
            fruitPrice = 1.20;
            console.log((fruitPrice * quantity).toFixed(2));
        }else if (fruit === "orange") {
            fruitPrice = 0.85;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "grapefruit") {
            fruitPrice = 1.45;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "kiwi") {
            fruitPrice = 2.70;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "pineapple") {
            fruitPrice = 5.50;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "grapes") {
            fruitPrice = 3.85;
            console.log((fruitPrice * quantity).toFixed(2));
        } else {
            console.log("error");
        }       
        
    } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        if (fruit === "banana") {
            fruitPrice = 2.70;
            console.log((fruitPrice * quantity).toFixed(2));
        }  else if (fruit === "apple") {
            fruitPrice = 1.25;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "orange") {
            fruitPrice = 0.90;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "grapefruit") {
            fruitPrice = 1.60;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "kiwi") {
            fruitPrice = 3.00;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "pineapple") {
            fruitPrice = 5.60;
            console.log((fruitPrice * quantity).toFixed(2));
        } else if (fruit === "grapes") {
            fruitPrice = 4.20;
            console.log((fruitPrice * quantity).toFixed(2));
        } 
    } else {
        console.log("error");
    }
        
    
}
    
fruitShop(["tomato", "Monday", "0.5"]);
