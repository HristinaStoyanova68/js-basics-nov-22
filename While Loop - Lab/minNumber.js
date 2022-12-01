function solve(input) {

    let index = 0;
    let n = input[index];
    let min = Number.MAX_SAFE_INTEGER;

    while (n !== "Stop") {
        n = Number(input[index]);
        if (n < min) {
            min = n;
        } 
        n = input[index];
        index ++;
    }
    console.log(min);

}

solve(["-1", "-2", "Stop"]);