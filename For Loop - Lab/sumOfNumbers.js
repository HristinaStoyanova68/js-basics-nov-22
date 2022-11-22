function solve(input) {

    let n = input[0];
    let numAsString = n + "";
    let sum = 0;


    for(let i = 0; i < numAsString.length; i ++) {

        sum = sum + Number(numAsString[i]);
        
    } console.log(`The sum of the digits is:${sum}`);


}

solve(["1234"]);