function solve(input) {

    let age = Number(input[0]);
    let washMashPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let totalMoney = 0.00;
    let evenBirthdayMoney = 10.00;

    for (let i = 1; i <= age; i ++) {
        if (i % 2 === 0) {
            totalMoney = totalMoney + (evenBirthdayMoney - 1);
            evenBirthdayMoney = evenBirthdayMoney + 10;
        } else {
            totalMoney = totalMoney + toyPrice;
        }
    } if (totalMoney >= washMashPrice) {
        let moneyLeft = totalMoney - washMashPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let neededMoney = washMashPrice - totalMoney;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }

}

solve(["21",

"1570.98",

"3"]);