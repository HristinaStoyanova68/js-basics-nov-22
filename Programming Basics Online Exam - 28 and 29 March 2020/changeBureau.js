function changeBureau(input) {
    let countBitcoin = Number(input[0]);
    let countChineseYuan = Number(input[1]);
    let commission = Number(input[2]);

    let bgn = countBitcoin * 1168 + countChineseYuan * 0.15 * 1.76;
    let eur = bgn / 1.95;
    let total = eur - (eur * commission / 100);

    console.log(total.toFixed(2));
     
}

changeBureau(["7","50200.12","3"]);