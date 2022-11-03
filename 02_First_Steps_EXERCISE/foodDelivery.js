function foodDelivery(input) {

    let chickMenuPrice = Number(10.35);
    let fishMenuPrice = Number(12.40);
    let vegMenuPrice = Number(8.15);

    let chickMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);

    let allMenuSum = chickMenu * chickMenuPrice + fishMenu * fishMenuPrice + vegMenu * vegMenuPrice;
    let dessertPrice = allMenuSum * 0.20;
    let deliveryPrice = 2.50;

    let totalSum = Number(allMenuSum) + Number(dessertPrice) + Number(deliveryPrice);

    console.log(totalSum);






}

foodDelivery(["2","4","3"]);