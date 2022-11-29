function solve(input) {

    let index = 0;
    let action = input[index];
    let steps = 0;
    let diff = 0;
    

    while (action !== "Going home") {
        action = Number(input[index]);
        index ++;
        steps += action;
     if (steps >= 10000) {
        diff = steps - 10000;
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
        return;
    } action = input[index];
    } 
    index ++;
    let stepsToHome = Number(input[index]);
    steps += stepsToHome;
    if (steps >= 10000) {
        diff = steps - 10000;
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    } else {
        diff = 10000 - steps;
        console.log(`${diff} more steps to reach goal.`);
    }
   
}
solve(["125", "250", "4000", "30", "2678", "4682"]);


        
    
     

    



