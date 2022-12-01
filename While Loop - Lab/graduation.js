function solve(input) {
    let index = 0;
    let name = input[index];
    index ++;
    let year = 1;
    let examFailed = 0;
    let excluded = false;
    let totalSum = 0;
    
    while (year <= 12) {
        let cuurGrade = Number(input[index]);
        index ++;
        if (cuurGrade < 4) {
            examFailed ++;
            if (examFailed === 2) {
                excluded = true;
                break;
            }
            continue;
        }
        totalSum += cuurGrade;
        year ++;
    }
    let averageGrade = totalSum / 12;
    if (excluded === false) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${year} grade`);
    }
}

solve(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);