function solve(input) {
    let r = Number(input[0]);

    let circleArea = Math.PI * r * r;
    let peimeter = 2 * Math.PI * r;

    console.log(circleArea.toFixed(2));
    console.log(peimeter.toFixed(2));

}

solve(["4.5"]);