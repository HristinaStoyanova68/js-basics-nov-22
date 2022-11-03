function basketballEquiptment(input) {

    let annualFee = Number(input[0]);
    let shoesPrice = annualFee * 0.60;
    let outfitPrice = shoesPrice * 0.80;
    let ballprice = outfitPrice * 0.25;
    let accessoriesprice = ballprice * 0.20;

    let totalPrice = annualFee + shoesPrice + outfitPrice + ballprice + accessoriesprice;

    console.log(totalPrice);


   

}

basketballEquiptment(["365"]);