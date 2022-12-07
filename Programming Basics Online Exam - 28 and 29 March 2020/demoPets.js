function foodForPets(input) {

    let countDays = Number(input[0]);
    let allFood = Number(input[1]);
    let dogFoodFirstDay = Number(input[2]);
    let catFoodFirstDay = Number(input[3]);
    let dogFoodSecDay = Number(input[4]);
    let catFoodSecDay = Number(input[5]);
    let dogFoodThirdDay = Number(input[6]);
    let catFoodThirdDay = Number(input[7]);
    let periodForStatistics = 3;
    

     let totalFoodFirstDay = dogFoodFirstDay + catFoodFirstDay;
     let totalFoodSectDay = dogFoodSecDay + catFoodSecDay;
     let totalFoodThirdtDay = dogFoodThirdDay + catFoodThirdDay;

     let allEatenFoodPerPeriod = (totalFoodFirstDay + totalFoodSectDay + totalFoodThirdtDay) * periodForStatistics;
     let percentAllEatenFoodPerPeriod = allEatenFoodPerPeriod * 100 / allFood;
     let percentAllEatenFood = percentAllEatenFoodPerPeriod / periodForStatistics;
     let totalEatenBiscuit = totalFoodThirdtDay * 0.10;
     let allDogEatenFood = dogFoodFirstDay + dogFoodSecDay + dogFoodThirdDay;
     let percentDogEatenFood = allDogEatenFood * 100 / allEatenFood;
     let allCatEatenFood = catFoodFirstDay + catFoodSecDay + catFoodThirdDay;
     let percentCatEatenFood = allCatEatenFood * 100 / allEatenFood;

     console.log(`Total eaten biscuits: ${Math.round(totalEatenBiscuit)}gr.`);
     console.log(`${(percentAllEatenFood).toFixed(2)}% of the food has been eaten.`);
     console.log(`${(percentDogEatenFood).toFixed(2)}% eaten from the dog.`);
     console.log(`${(percentCatEatenFood).toFixed(2)}% eaten from the cat.`);



}

foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);