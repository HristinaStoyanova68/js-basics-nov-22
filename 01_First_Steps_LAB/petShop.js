function petshop(input) {

    let dogFoodPrice = Number(2.50);
    let catFoodPrice = Number(4.00);
    let dogFoodpack = Number(input[0]);
    let catFoodPack = Number(input[1]);

    let total = dogFoodPrice * dogFoodpack + catFoodPrice * catFoodPack
     
    console.log(total + " lv.");

}

petshop(["5","4"]);