function repainting(input) {

    let nylonPrice = Number(1.50);
    let paintPrice = Number(14.50);
    let paintThinnerPrice = Number(5.00);

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let workHours = Number(input[3]);

    let allNylon = nylon + Number(2);
    let allpaint = paint + (paint * 0.10);
    let bagPrice = Number(0.40);

    let sumForMaterials = (allNylon * nylonPrice) + (allpaint * paintPrice) + (paintThinner * paintThinnerPrice) + bagPrice;

    let priceForHour = sumForMaterials * 0.30;

    let totalSum = sumForMaterials + (workHours * priceForHour);

    console.log(totalSum);

}

repainting(["10","11","4","8"]);