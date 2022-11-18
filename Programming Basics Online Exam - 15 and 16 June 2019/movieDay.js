function movieDay(input) {
    
    let shootingTime = Number(input[0]);
    let numberOfScenes = Number(input[1]);
    let timeOfScenes = Number(input[2]);

    let prepTime = shootingTime * 0.15;

    let totalTime = prepTime + (numberOfScenes * timeOfScenes);
    
    if (totalTime > shootingTime) {
        let neededTime = totalTime - shootingTime;
        console.log(`Time is up! To complete the movie you need ${Math.round(neededTime)} minutes.`);
    } else {
        let leftTime = shootingTime - totalTime;
        console.log(`You managed to finish the movie on time! You have ${Math.round(leftTime)} minutes left!`);
    } 



}

movieDay(["60", "15", "3"]);