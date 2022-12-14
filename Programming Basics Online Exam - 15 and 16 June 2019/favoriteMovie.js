function solve(input) {

    let index = 0;
    let movieName = input[index];
    index++;
    let sum = 0;
    let countOfMovies = 0;
    let bestMovie = "";
    let bestSum = Number.MIN_SAFE_INTEGER;

    while (movieName !== "STOP") {

        for (let i = 0; i < movieName.length; i++) {
            let letter = movieName[i];

            if (letter >= "A" && letter <= "Z") {
                sum += movieName.charCodeAt(i) - movieName.length;
            } else if (letter >= "a" && letter <= "z") {
                sum += movieName.charCodeAt(i) - (movieName.length * 2);
            } else {
                sum += movieName.charCodeAt(i);
            }
        }
        
        countOfMovies++;
        if (countOfMovies >= 7) {
            console.log("The limit is reached.");
            break;
        }
        if (sum > bestSum) {
            bestSum = sum;
            bestMovie = movieName;
        }
        movieName = input[index];
        index++;
        sum = 0;
    }
    console.log(`The best movie for you is ${bestMovie} with ${bestSum} ASCII sum.`);
}

solve(["The maze",
    "School story 2",
    "Shrek 2",
    "Ice age",
    "STOP"]);