function solve(input) {

    let numOfLoads = Number(input[0]);
    let allTonage = 0;
    let t1Sum = 0;
    let t2Sum = 0;
    let t3Sum = 0;
    let tonnagePrice1 = 0;
    let tonnagePrice2 = 0;
    let tonnagePrice3 = 0;
   
    for (let i = 1; i <= numOfLoads ; i ++) {
        currTonnage = Number(input[i]);
        allTonage = allTonage + Number(input[i]);

        if (currTonnage <= 3) {

            t1Sum = t1Sum + currTonnage;
            tonnagePrice1 = tonnagePrice1 +( currTonnage * 200);
            

        } else if (currTonnage <= 11) {
            t2Sum = t2Sum + currTonnage;
            tonnagePrice2 =tonnagePrice2 + (Number(input[i]) * 175);
        } else {
            t3Sum = t3Sum + currTonnage;
            tonnagePrice3 =tonnagePrice3 + (Number(input[i]) * 120);
        }
        
    }       
            let totalPrice = tonnagePrice1 + tonnagePrice2 + tonnagePrice3;
            let averagePrice = totalPrice / allTonage;
            let percentVanTonnage = t1Sum / allTonage * 100;
            let percentTrackTonnage = t2Sum / allTonage * 100;
            let percentTrainTonnage = t3Sum / allTonage * 100;

            console.log(averagePrice.toFixed(2));
            console.log(`${percentVanTonnage.toFixed(2)}%`);
            console.log(`${percentTrackTonnage.toFixed(2)}%`);
            console.log(`${percentTrainTonnage.toFixed(2)}%`);
            
}           

solve(["5", "2", "10", "20", "1", "7"]);