function bonusScore(input) {

    let startPoint = Number(input[0]);
    let bonus = 0.0;

    if (startPoint <= 100) {
         bonus = 5;
    } else if (startPoint <= 1000) {
        bonus = startPoint * 0.20;
    } else  {
        bonus = startPoint * 0.10;
        
    } if (startPoint % 2 === 0) {
        bonus += 1;
    } else if(startPoint % 10 === 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(startPoint + Number(bonus));
}

bonusScore(["15875"]);