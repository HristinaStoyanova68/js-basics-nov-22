function sleepyTomCat(input) {

    let holiday = Number(input[0]);
    let annualGameTime = 30000;
    let workDays = 365 - holiday;
    let realGameTime = (workDays * 63) + (holiday * 127);

    if (realGameTime > annualGameTime) {
        let diffTime = realGameTime - annualGameTime;
        let hours = Math.floor(diffTime / 60);
        let minutes = diffTime % 60;

        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        let differenceOfTime = annualGameTime - realGameTime;
        let hours = Math.floor(differenceOfTime / 60);
        let minutes = differenceOfTime % 60;
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

sleepyTomCat(["113"]);