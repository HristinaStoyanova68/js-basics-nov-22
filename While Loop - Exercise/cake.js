function solve(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let index = 2;
    let pieces = input[index];
    
    let piecesCount = 0;
    let allCake = width * length;
    
    while (pieces !== "STOP") {
        pieces = Number(input[index]);
        index ++;
        piecesCount += pieces;
        if (piecesCount === allCake) {
            console.log(`${0} pieces are left.`);
            return;
        } else if (piecesCount > allCake) {
            let piecesNeeded = piecesCount - allCake;
            console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
            return;
        } pieces = input[index];
    } 
        let piecesleft =allCake - piecesCount;
        console.log(`${piecesleft} pieces are left.`);
}

solve(["10", "10", "20", "20", "20", "20", "21"]);