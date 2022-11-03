function suppliesForSchool(input) {

    let penPack = Number(input[0]);
    let markerPack = Number(input[1]);
    let literLiquid = Number(input[2]);
    let discount = Number(input[3] / 100);

    let penPrice = Number(5.80);
    let markerPrice = Number(7.20);
    let literLiquidPrice = Number(1.20);

    let allSum = penPack * penPrice + markerPack * markerPrice + literLiquid * literLiquidPrice;
    let alldiscount = allSum * discount;

    let totalSum = allSum - alldiscount;

    console.log(totalSum);

  



}

suppliesForSchool(["2","3","4","25"]);