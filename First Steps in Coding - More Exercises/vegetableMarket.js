function solve(input) {

    let nVegPrice = Number(input[0]);
    let mFruitsPrice = Number(input[1]);
    let allKgVeg = Number(input[2]);
    let allKgFruits = Number(input[3]);

    let sumLv = nVegPrice * allKgVeg + mFruitsPrice * allKgFruits;
    let sumEuro = sumLv / 1.94;

    console.log(sumEuro.toFixed(2));

}

solve(["1.5", "2.5", "10", "10"]);