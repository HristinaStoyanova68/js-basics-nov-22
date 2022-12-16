function solve(input) {

    let w = Number(input[0]);
    let h = Number(input[1]);

    if (h >= 3 && h <= w && w <= 100) {

        let wInCentimetres = w * 100;
        let hInCentimetres = h * 100;
        let hAveilable = hInCentimetres - 100;

        let desks = Math.trunc(hAveilable / 70);
        let row = Math.trunc(wInCentimetres / 120);

        let numOfPlaces = desks * row - 3;

        console.log(numOfPlaces);
    }

}

solve(["8.4", "5.2"]);