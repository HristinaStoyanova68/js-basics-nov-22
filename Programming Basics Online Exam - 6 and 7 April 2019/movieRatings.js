function solve(input) {

    let index = 0;
    let numOfFilms = Number(input[index]);
    index++;
    let nameOfMovie = input[index];
    index++;
    let maxRating = Number.MIN_SAFE_INTEGER;
    let maxMovie = "";
    let minRating = Number.MAX_SAFE_INTEGER;
    let minMovie = "";
    let sumRatings = 0;

    for (let i = 1; i <= numOfFilms; i++) {

        let currRating = Number(input[index]);
        index++;

        if (currRating > maxRating) {
            maxRating = currRating;
            maxMovie = nameOfMovie;

        } else if (currRating < minRating) {
            minRating = currRating;
            minMovie = nameOfMovie;
        }
        sumRatings += currRating;
        nameOfMovie = input[index];
        index++;
    }
    let averageRating = sumRatings / numOfFilms;

    console.log(`${maxMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);

}

solve(["3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2"]);