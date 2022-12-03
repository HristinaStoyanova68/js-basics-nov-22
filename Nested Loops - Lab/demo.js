function solve(input) {

    let floorentered = Number(input[0]);
    let roomEntered = Number(input[1]);
    let line = "";

    for (let floor = floorentered; floor >= 1; floor--) {
        for (let room = 0; room <= roomEntered - 1; room++) {
            if (floor === floorentered) {
                line += `L${floor}${room} `;
            } else if (floor % 2 === 0) {
                line += `O${floor}${room} `;
            } else {
                line += `A${floor}${room} `;

            }
        }
        line += "\n"
    }
    console.log(line);
}

solve(["9",

    "5"]);



solve(["9",

    "5"]);