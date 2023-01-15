function solve(input) {
    let firstSector = "A";
    let lastSector = input[0];
    let rowFirstSector = Number(input[1]);
    let seatsOddRow = Number(input[2]);
    let lastSectorRow = rowFirstSector;
    let firstSeat = "a";


    let result = "";
    let seatCount = 0;


    for (let i = firstSector.charCodeAt(); i <= lastSector.charCodeAt(); i++) {
        let currSector = String.fromCharCode(i);

        for (let j = 1; j <= lastSectorRow; j++) {
            if (j % 2 === 0) {
                for (let k = firstSeat.charCodeAt(); k <= (firstSeat.charCodeAt() + (seatsOddRow + 1)); k++) {
                    let currSeat = String.fromCharCode(k);
                    result += `${currSector}${j}${currSeat}`;
                    seatCount++;
                    console.log(result);
                    result = "";
                }

            } else {
                for (let k = firstSeat.charCodeAt(); k <= (firstSeat.charCodeAt() + (seatsOddRow - 1)); k++) {
                    let currSeat = String.fromCharCode(k);
                    result += `${currSector}${j}${currSeat}`;
                    seatCount++;

                    console.log(result);
                    result = "";
                }

            }
        }
        lastSectorRow++;
    }
    console.log(seatCount);


}

solve(["C", "4", "2"]);