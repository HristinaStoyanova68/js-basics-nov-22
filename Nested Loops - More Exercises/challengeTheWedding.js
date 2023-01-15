function solve(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let combinationCount = 0;
    let result = "";


    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            result += `(${i} <-> ${j}) `;
            combinationCount++;

            if (combinationCount === tables) {
                break;
            }
        }
        if (combinationCount === tables) {
            break;
        }
    }
    console.log(result.trimEnd());

}
solve(["2", "2", "6"]);