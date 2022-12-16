function solve(input) {

    let mackerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let total = (bonitoKg * mackerelPrice * 1.6) + (safridKg * spratPrice * 1.8) + (musselsKg * 7.5);

    console.log(total.toFixed(2));

}

solve(["5.55", "3.57", "4.30", "3.60", "7"]);