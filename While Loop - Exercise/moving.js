function solve(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let index = 3;
    let boxesCount = input[index];
    let allBoxesCount = 0;

    let allSpace = width * length * height;

    while (boxesCount !== "Done") {
        boxesCount = Number(input[index]);
        index ++;
        allBoxesCount += boxesCount;
        if (allBoxesCount === allSpace) {
            let freeCubMetersLeft = allBoxesCount - allSpace;
            console.log(`${freeCubMetersLeft} Cubic meters left.`);
            return;
        } else if (allBoxesCount > allSpace) {
            let neededCubMeters = allBoxesCount - allSpace;
            console.log(`No more free space! You need ${neededCubMeters} Cubic meters more.`);
            return;
        } boxesCount = input[index];
    } 
    let freeCubMetersLeft = allSpace - allBoxesCount;
    console.log(`${freeCubMetersLeft} Cubic meters left.`);


}

solve(["10",

"1",

"2",

"4",

"6",

"Done"]);