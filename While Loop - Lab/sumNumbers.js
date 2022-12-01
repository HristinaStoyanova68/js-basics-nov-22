function solve(input) {

    let index = 0;
    let num = Number(input[index]);
    index ++;
    let currNum = Number(input[index]);
    let sum = 0;

    while (sum < num) {
        
        currNum = Number(input[index]);
        index ++;
        sum += currNum;
       
    }
    console.log(sum);

}

solve(["20", "1", "2", "3", "4", "5", "6"]);