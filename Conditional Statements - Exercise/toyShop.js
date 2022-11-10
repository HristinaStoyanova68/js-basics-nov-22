function toyShop(input) {

    let tripPrice = Number(input[0])
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);
 
    let moneyEarned = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2;
 
    let toysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
       if (toysCount >= 50) {
 
            moneyEarned = moneyEarned * 0.75;
 
    }
       let moneyAfterRent = moneyEarned * 0.90; 
 
       if (moneyAfterRent >= tripPrice) {
          let moneyLeft = moneyAfterRent - tripPrice;
 
          console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
       } else {
          let moneyMissing  = tripPrice - moneyAfterRent;
          console.log(`Not enough money! ${moneyMissing.toFixed(2)} lv needed.`);
       }
  
 
 }
    
 
 
 
 
 toyShop(["40.8","20","25","30","50","10"]);