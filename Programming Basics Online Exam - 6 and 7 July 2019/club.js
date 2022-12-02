function solve(input) {

    let index = 0;
    let wishedProfit = Number(input[index]);
    index++;
    let cocktail = input[index];
    index++;
    let countCocktail = Number(input[index]);
    index++;

    let pricePerCocktail = 0;
    let cocktailPrice = 0;
    let totalPrice = 0;

    while (cocktail !== "Party!") {

        pricePerCocktail = Number(cocktail.length);

        cocktailPrice = pricePerCocktail * countCocktail;
        if (cocktailPrice % 2 !== 0) {
            cocktailPrice = cocktailPrice * 0.75;
            totalPrice += cocktailPrice;
        } else {
            totalPrice += cocktailPrice;
        }
        if (totalPrice >= wishedProfit) {
            console.log("Target acquired.");
            console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
            return;
        }
        cocktail = input[index];
        index++;
        countCocktail = Number(input[index]);
        index++;

    } let neededMoney = wishedProfit - totalPrice;
    console.log(`We need ${neededMoney.toFixed(2)} leva more.`);
    console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);


}

solve(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"])



    ;