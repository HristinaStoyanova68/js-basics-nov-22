function cinema(input) {
    let projection = input[0];
    let row = Number(input[1]);
    let columns = Number(input[2]);

    switch (projection) {
        case "Premiere":
            console.log(`${(row * columns * 12).toFixed(2)} leva`);
            break;
        case "Normal":
            console.log(`${(row * columns * 7.50).toFixed(2)} leva`);
            break;
        case "Discount":
                console.log(`${(row * columns * 5.00).toFixed(2)} leva`);
            break;

    }

    
}

cinema(["Premiere", "10", "12"]);