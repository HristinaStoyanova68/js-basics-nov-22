function solve(input) {

    let rent = Number(input[0]);

    let statuettes = rent * 0.70;
    let catering = statuettes * 0.85;
    let sound = catering / 2;

    let price = rent + statuettes + catering + sound;
    console.log(price.toFixed(2));

}

solve(["5555"]);