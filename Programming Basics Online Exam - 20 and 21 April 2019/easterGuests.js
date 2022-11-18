// •	Един козунак струва 4лв.
// •	Едно яйце струва 0.45лв.

// •	На първия ред са броят на гостите – цяло число в интервала [0 ... 200000]
// •	На втория ред е бюджетът с който разполага Любо  – цяло число в интервала [0 ... 200000]

function easterGuests(input) {

    let countGuests = Number(input[0]);
    let budget = Number(input[1]);

    let countEasterBreads = Math.ceil(countGuests / 3);
    let easterBreadPrice = countEasterBreads * 4.00;
    let countEggs = countGuests * 2;
    let allPriceGuestEggs = countEggs * 0.45;

    let totalSum = easterBreadPrice + allPriceGuestEggs;

    if (budget >= totalSum){
        moneyLeft = budget - totalSum;
        console.log(`Lyubo bought ${countEasterBreads} Easter bread and ${countEggs} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    } else {
        neededMoney = totalSum - budget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
    }

}

 easterGuests(["9", "12"]);