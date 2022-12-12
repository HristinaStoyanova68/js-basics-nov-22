function solve(input) {

    let index = 0;
    let name = input[index];
    index++;
    let sum = 0;
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let maxName = "";


    while (name !== "Stop") {

        let n = name.length;

        for (let i = 0; i < n; i++) {

            let num = Number(input[index]);
            index++;
            if (num === name.charCodeAt(i)) {
                sum += 10;
            } else {
                sum += 2;
            }

        }
        if (sum >= maxPoints) {
            maxPoints = sum;
            maxName = name;
        }

        name = input[index];
        index++;
        sum = 0;

    }
    console.log(`The winner is ${maxName} with ${maxPoints} points!`);
}

solve(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"]);