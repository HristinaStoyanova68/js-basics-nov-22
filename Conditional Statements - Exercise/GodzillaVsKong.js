function GodzillaVsKong(input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let outfitPricePerPerson = Number(input[2]);
 
    let decorationMoney = budget * 0.10;
    let outfitPrice = people * outfitPricePerPerson;
    
    if (people >= 150) {
       outfitPrice = outfitPrice * 0.90;
    }
    let totalMoney = decorationMoney + outfitPrice;
 
    if (totalMoney <= budget) {
       let mmoneyLeft = budget - totalMoney;
       console.log("Action!");
       console.log(`Wingard starts filming with ${mmoneyLeft.toFixed(2)} leva left.`);
    } else {
       let missingMoney = totalMoney - budget;
       console.log(`Not enough money!`);
       console.log(`Wingard needs ${missingMoney.toFixed(2)} leva more.`);
    } 
    
 }
 
 GodzillaVsKong(["9587.88","222","55.68"]);