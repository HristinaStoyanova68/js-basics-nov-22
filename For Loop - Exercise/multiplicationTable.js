function solve(input) {

    let n = Number(input[0]);

    for (let i = 1; i <= 10; i ++) {
       let sum = i * n;
       //let numAsString = i;
        console.log(`${i} * ${n} = ${sum}`);
    }

}

solve(["5"]);