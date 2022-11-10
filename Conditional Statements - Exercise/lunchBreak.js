function lunchBreak(input) {
    let nameOfMovie = (input[0]);
    let movieTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let busyTime = lunchTime + restTime;

    let freeTime = breakTime - busyTime;

    if (freeTime >= movieTime ) {
        let timeLeft = freeTime - movieTime;
        console.log(`You have enough time to watch ${nameOfMovie} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        let neededTime = movieTime - freeTime;
        console.log(`You don't have enough time to watch ${nameOfMovie}, you need ${Math.ceil(neededTime)} more minutes.`)
    }

}

lunchBreak(["Teen Wolf","48","60"]);