function areaOfFigures(input) {

    let typeOfFigure = input[0];

    if (typeOfFigure === "square") {
        let a = Number(input[1]);
        console.log((a * a).toFixed(3));

    } else if (typeOfFigure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        console.log((a * b).toFixed(3));

    } else if (typeOfFigure === "circle") {
        let r = Number(input[1]);
        console.log((Math.PI * Math.pow(r,2)).toFixed(3));
    } else if (typeOfFigure === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        console.log((a * h / 2).toFixed(3));
    }

}
    areaOfFigures(["triangle","4.5","20"]);