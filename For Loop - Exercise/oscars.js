function solve(input) {

    let nameOfActor = input[0];
    let academyScore = Number(input[1]);
    let nCountAppraisers = Number(input[2]);
    
    for (let i = 3; i < input.length; i += 2) {
        let nameOfAppriser = input[i];
        let appriserScore = Number(input[i + 1]);

        result = nameOfAppriser.length * appriserScore / 2;
        academyScore += result;

        if (academyScore > 1250.50) {
         console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${academyScore.toFixed(1)}!`);
        return;
        }
    } 
        let neededScore = 1250.50 - academyScore;
        console.log(`Sorry, ${nameOfActor} you need ${neededScore.toFixed(1)} more!`);
       

}

solve(["Sandra Bullock", 
"340", 
"5", 
"Robert De Niro", 
"50", 
"Julia Roberts", 
"40.5", 
"Daniel Day-Lewis", 
"39.4", 
"Nicolas Cage", 
"29.9", 
"Stoyanka Mutafova", 
"33"]);