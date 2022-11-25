function solve(input) {

    let studentsCount = Number(input[0]);
    let failCont = 0;
    let goodCount = 0;
    let veryGoodCount = 0;
    let topCount = 0;
    let allGrade = 0;

    for (let i = 1; i <= studentsCount; i ++) {

        let currGrade = Number(input[i]);
        allGrade = allGrade + currGrade;
        
        if (currGrade >= 2 && currGrade <= 2.99) {
            failCont ++;
        } else if (currGrade <= 3.99) {
            goodCount ++;
        } else if (currGrade <= 4.99) {
            veryGoodCount ++;
        } else {
            topCount ++;
        }
    } let failPercent = failCont / studentsCount * 100;
      let goodPercent = goodCount / studentsCount * 100;
      let veryGoodPercent = veryGoodCount / studentsCount * 100;
      let topPercent = topCount / studentsCount * 100;

      let averageGrade = allGrade / studentsCount;

      console.log(`Top students: ${topPercent.toFixed(2)}%`);
      console.log(`Between 4.00 and 4.99: ${veryGoodPercent.toFixed(2)}%`);
      console.log(`Between 3.00 and 3.99: ${goodPercent.toFixed(2)}%`);
      console.log(`Fail: ${failPercent.toFixed(2)}%`);
      console.log(`Average: ${averageGrade.toFixed(2)}`);
}

solve(["6", "2", "3", "4", "5", "6", "2.2"]);