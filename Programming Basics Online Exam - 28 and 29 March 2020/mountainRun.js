function mountainRun(input) {

    let timeRecord = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let delayTime = (Math.floor(distance /50)) * 30;
    let realTime = distance * secondsPerMeter + delayTime;

    if (realTime >= timeRecord) {
        let moreSeconds = realTime - timeRecord;
        console.log(`No! He was ${moreSeconds.toFixed(2)} seconds slower.`)
    } else {
       console.log(`Yes! The new record is ${realTime.toFixed(2)} seconds.`);

    }
}

mountainRun(["1377","389","3"]);
