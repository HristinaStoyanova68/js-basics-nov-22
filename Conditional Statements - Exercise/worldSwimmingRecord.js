function worldSwimmingRecord(input) {
    let worldSwimmingRecord = Number(input[0]);
    let swimmingDistance = Number(input[1]);
    let timePer1Meter = Number(input[2]);

    let personTime = swimmingDistance * timePer1Meter;
    let delayCount = Math.floor(swimmingDistance / 15);
    
    let delayTime = delayCount * 12.5;
    
    let timeAfterDelay = personTime + delayTime;

    if (timeAfterDelay < worldSwimmingRecord) {
       console.log(` Yes, he succeeded! The new world record is ${timeAfterDelay.toFixed(2)} seconds.`);

    } else {
        let missingSeconds = timeAfterDelay -worldSwimmingRecord;
        console.log(`No, he failed! He was ${missingSeconds.toFixed(2)} seconds slower.`)
        
    }
}

worldSwimmingRecord(["10464","1500","20"]);