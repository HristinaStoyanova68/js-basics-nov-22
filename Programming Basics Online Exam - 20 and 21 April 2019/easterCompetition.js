function solve(input) {

    let index = 0;
    let breadCount = Number(input[index]);
    index ++;
    let maxScore = Number.MIN_SAFE_INTEGER;
    let nameMaxScore = "";


    for (let i = 1; i <= breadCount; i ++) {
        
        let name = input[index];
        index ++;
        let score = input[index]; 

        let allCurrScore = 0;

        while (score !== "Stop") {
            
            score = Number(input[index]);
            index ++;
            allCurrScore += score;

            score = input[index];
        }

        index ++;
        
        console.log(`${name} has ${allCurrScore} points.`);
        
        if (allCurrScore > maxScore) {
            maxScore = allCurrScore;
            nameMaxScore = name;
            console.log(`${nameMaxScore} is the new number 1!`);
        }
    }
    console.log(`${nameMaxScore} won competition with ${maxScore} points!`);


}

solve([
    "2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"]);