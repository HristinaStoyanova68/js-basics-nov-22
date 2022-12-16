function solve(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let allSideWalls = 2 * sideWall - 2 * window;
    let door = 1.2 * 2;
    let frontWall = x * x - door;
    let backWall = x * x;
    let backAndFront = frontWall + backWall;
    let totalWalls = allSideWalls + backAndFront;
    let paintWalls = totalWalls / 3.4;

    let allSideRoof = 2 * x * y;
    let trianglesRoof = 2 * (x * h / 2);
    let allRoof = allSideRoof + trianglesRoof;
    let paintRoof = allRoof / 4.3;

    console.log(paintWalls.toFixed(2));
    console.log(paintRoof.toFixed(2));


}

solve(["10.25", "15.45", "8.88"]);