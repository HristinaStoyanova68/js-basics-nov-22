function solve(input) {

    let numsGroups = Number(input[0]);
   
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;

    for(let i = 1; i <= numsGroups; i ++) {
        let currNum = Number(input[i]);

        if (currNum <= 5) {
            sum1 = sum1 + Number(input[i]);
        } else if (currNum <= 12) {
            sum2 = sum2 + Number(input[i]);
        } else if (currNum <= 25) {
            sum3 = sum3 + Number(input[i]);
        } else if (currNum <= 40) {
            sum4 = sum4 + Number(input[i]);
        } else {
            sum5 = sum5 + Number(input[i]);
        }
        allPeople = sum1 + sum2 + sum3 + sum4 + sum5;
        
    } let percent1 = sum1 / allPeople * 100;
      let percent2 = sum2 / allPeople * 100;
      let percent3 = sum3 / allPeople * 100;
      let percent4 = sum4 / allPeople * 100;
      let percent5 = sum5 / allPeople * 100;

        console.log(`${percent1.toFixed(2)}%`);
        console.log(`${percent2.toFixed(2)}%`);
        console.log(`${percent3.toFixed(2)}%`);
        console.log(`${percent4.toFixed(2)}%`);
        console.log(`${percent5.toFixed(2)}%`);
}

solve(["5", "25", "41", "31", "250", "6"]);