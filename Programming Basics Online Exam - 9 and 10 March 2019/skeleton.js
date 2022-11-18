function skeleton(input) {

    let minOfQuota = Number(input[0]);
    let secOfControl = Number(input[1]);
    let lenght = Number(input[2]);
    let secForHundred = Number(input[3]);

    let secOfQuota = minOfQuota * 60;
    let allSecOfQuota =secOfControl + secOfQuota;
    let rushTime = lenght / 120 * 2.5;
    let timeMartin = (lenght / 100 * secForHundred) - rushTime;

    if (allSecOfQuota < timeMartin) {
        let neededSec = timeMartin - allSecOfQuota;
        console.log(`No, Marin failed! He was ${neededSec.toFixed(3)} second slower.`);

    } else {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeMartin.toFixed(3)}.`);
    }
}

skeleton(["1", "20", "1546", "12"])