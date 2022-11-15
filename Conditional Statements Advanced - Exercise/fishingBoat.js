function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let countFishMan = Number(input[2]);


    rentSpring = Number(3000);
    rentSummer = Number(4200);
    rentAutumn = Number(4200);
    rentWinter = Number(2600);
    totalRent = 0.00;
    

  switch (season) {
    case "Spring":
        if (countFishMan <= 6) {
            totalRent = rentSpring * 0.90;
        } else if (countFishMan <= 11) {
            totalRent = rentSpring * 0.85;
        } else {
            totalRent = rentSpring * 0.75;
        }
        break;
    case "Summer":
    case "Autumn":
        if (countFishMan <= 6) {
            totalRent = rentSummer * 0.90;
        } else if (countFishMan <= 11) {
            totalRent = rentSummer * 0.85;
        } else {
            totalRent = rentSummer * 0.75;
        }
        break;
    case "Winter":
        if (countFishMan <= 6) {
            totalRent = rentWinter * 0.90;
        } else if (countFishMan <= 11) {
            totalRent = rentWinter * 0.85;
        } else {
            totalRent = rentWinter * 0.75;
        }
        break;

  } if (countFishMan % 2 === 0 && season !== "Autumn") {
    totalRent = totalRent * 0.95; 


  
  } if (budget >= totalRent) {
    let moneyLeft = budget - totalRent;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);

  } else {
    let neededMoney = totalRent - budget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
  }
    

}    




fishingBoat(["2000", "Winter", "13"]);