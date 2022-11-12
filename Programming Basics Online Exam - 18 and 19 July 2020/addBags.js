// 1.	Цената на багаж над 20кг - реално число в диапазона [10.0…80.0]
// 2.	Килограми на багажа – реално число в диапазона [1.0…32.0]
// 3.	Дни до пътуването – цяло число в диапазона [1…60]
// 4.	Брой багажи – цяло число в диапазона [1…10]

function addBags(input) {

    let priceBagAbove20 = Number(input[0]);
    let kgBag = Number(input[1]);
    let days = Number(input[2]);
    let countBags = Number(input[3]);

    if (kgBag < 10) {
        let priceBag = priceBagAbove20 * 0.20;
        
        if (days < 7) {
            let totalPrice = priceBag * 1.40 * countBags;
            console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
        } else if (days <= 30) {
            let totalPrice = priceBag * 1.15 * countBags;
            console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
    } else {
        let totalPrice = priceBag * 1.10 * countBags;
        console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
    }
}  else if (kgBag <= 20) {
    let priceBag = priceBagAbove20 / 2;
    
    if (days < 7) {
        let totalPrice = priceBag * 1.40 * countBags;
        console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
    } else if (days <= 30) {
        let totalPrice = priceBag * 1.15 * countBags;
        console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
} else {
    let totalPrice = priceBag * 1.10 * countBags;
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
}

} else if (kgBag > 20) {
        priceBag = priceBagAbove20;
    
    if (days < 7) {
        let totalPrice = priceBag * 1.40 * countBags;
        console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
    } else if (days <= 30) {
        let totalPrice = priceBag * 1.15 * countBags;
        console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
} else {
    let totalPrice = priceBag * 1.10 * countBags;
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
}

}
}

addBags(["63.80","23","3","1"]);
