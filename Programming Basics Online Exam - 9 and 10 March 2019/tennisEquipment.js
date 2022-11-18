// •	Цена на една тенис ракета – реално число в интервала [0.00…100000.00]
// •	Брой тенис ракети - цяло число в интервала [0…100]
// •	Брой чифтове маратонки - цяло число в интервала [0…100]





function tennisEquipment(input) {

    let racketPrice = Number(input[0]);
    let countRacket = Number(input[1]);
    let countSneakers = Number(input[2]);

    let allRacketprice = racketPrice * countRacket;
    let sneakersPrice = racketPrice / 6;
    let allSneakersPrice = sneakersPrice * countSneakers;
    let allSum = allRacketprice + allSneakersPrice;
    let addEquipment = allSum * 0.20;
    let totalSum = allSum + addEquipment;

    let priceOfDjokovic = totalSum / 8;
    let sponsorsSum = totalSum - priceOfDjokovic;

    console.log(`Price to be paid by Djokovic ${Math.floor(priceOfDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsSum)}`);

}

tennisEquipment(["386","7", "4"]);