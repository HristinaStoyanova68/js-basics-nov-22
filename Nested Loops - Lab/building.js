function solve(input) {

    let floorentered = Number(input[0]);
    let roomEntered = Number(input[1]);
    let line = "";

    for (let floor = floorentered; floor >= 1; floor--) {
        for (let room = 0; room <= roomEntered; room++) {
            if (floor === floorentered) {
                if (room < roomEntered) {
                    line += `L${floor}${room} `;
                } else {
                    console.log(line);
                    line = "";
                }

            } else {
                if (floor % 2 === 0) {
                    if (room < roomEntered) {
                        line += `O${floor}${room} `;
                    } else {
                        console.log(line);
                        line = "";
                    }
                } else {
                    if (room < roomEntered) {
                        line += `A${floor}${room} `;
                    } else {
                        console.log(line);
                        line = "";
                    }
                }
            }

        }

    }

}

solve(["9",

    "5"]);