function trapeziodArea(input) {
    let firstSide= Number(input[0]);
    let secondSide = Number(input[1]);
    let height = Number(input[2]);

    let trapeziodArea = ((firstSide + secondSide)/ 2 * height).toFixed(2);
    console.log(trapeziodArea);

}
trapeziodArea(["8", "13", "7"]);