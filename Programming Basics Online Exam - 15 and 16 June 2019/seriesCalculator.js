function seriesCalculator (input) {

    let nameOfSeries = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let timeEpisodesNoReclams = Number(input[3]);

    let timeWithReclams = timeEpisodesNoReclams * 1.20;
    let additionalTime = seasonsCount * 10;
    
    let allTime = (seasonsCount * episodesCount * timeWithReclams) + additionalTime;
     
    console.log(`Total time needed to watch the ${nameOfSeries} series is ${Math.floor(allTime)} minutes.`);

}

seriesCalculator(["Riverdale", "3", "21", "45"]);