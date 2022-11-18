// •	Между 10 (вкл.) и 15 (вкл.) човека -> 15 % отстъпка от куверта за един човек
// •	Между 15 и 20 (вкл.) човека -> 20 % отстъпка от куверта за един човек
// •	Над 20 човека -> 25 % отстъпка от куверта за един човек

// 1.	Брой гости – цяло число в интервала [1...99] 
// 2.	Цена на куверт за един човек – реално число в интервала [0.00 … 99.00]
// 3.	Бюджетът на Деси  – реално число в интервала [0.00 … 9999.00] 


function easterParty(input) {

    let countGuest = Number(input[0]);
    let pricePerPerson = Number(input[1]);
    let budget = Number(input[2]);
    let cakePrice = budget * 0.10;
    let totalSum = 0.00;

    let totalSumForGuests = countGuest * pricePerPerson;

    if (countGuest < 10) {
        totalSum = totalSumForGuests + cakePrice;
    } else if (countGuest <= 15) {
        totalSum = (totalSumForGuests * 0.85) + cakePrice;
    } else if (countGuest <= 20) {
        totalSum = (totalSumForGuests * 0.80) + cakePrice;
    } else {
        totalSum = (totalSumForGuests * 0.75) + cakePrice;
    } if (budget >= totalSum) {
        moneyLeft = budget - totalSum;
        console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        neededMoney = totalSum - budget;
        console.log(`No party! ${neededMoney.toFixed(2)} leva needed.`);
    }
        
    
}

easterParty(["24", "35", "550"]);