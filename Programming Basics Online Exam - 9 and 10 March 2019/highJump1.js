function solve(input) {
    
    
    let index = 0;
    let wantedHeight = Number(input[index]);
    index ++;
 
    let realHeight = wantedHeight - 30;
    let unseccAttempts = 0;
    let attempt = 0;
    
    while (realHeight <= wantedHeight) {
        let currHeight = Number(input[index]);
            
        if (currHeight > realHeight) {
            realHeight += 5;
            unseccAttempts = 0;
        } else {
            unseccAttempts++;
        }
            
        attempt++;
 
        if (unseccAttempts === 3) {
            break;
        }
 
        index++;
    }
 
    if (unseccAttempts === 3) {
        console.log(`Tihomir failed at ${realHeight}cm after ${attempt} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${wantedHeight}cm after ${attempt} jumps.`);
    }
}

solve(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"]);