function solve(input) {

    let stadiumCapacity = Number(input[0]);
    let countFans = Number(input[1]);
    let fansA = 0;
    let fansB = 0;
    let fansV = 0;
    let fansG = 0;

    for (let i = 2; i <= countFans + 1; i ++) {

        let currSec = input[i];

        if (currSec === "A") {
            fansA ++;
        } else if (currSec === "B") {
            fansB ++;
        } else if (currSec === "V") {
            fansV ++;
        } else if (currSec === "G") {
            fansG ++;
        }
    } let fansAPercent = fansA / countFans * 100;
      let fansBPercent = fansB / countFans * 100;
      let fansVPercent = fansV / countFans * 100;
      let fansGPercent = fansG / countFans * 100;
      let fansPercent = (countFans / stadiumCapacity) * 100;

      console.log(`${fansAPercent.toFixed(2)}%`);
      console.log(`${fansBPercent.toFixed(2)}%`);
      console.log(`${fansVPercent.toFixed(2)}%`);
      console.log(`${fansGPercent.toFixed(2)}%`);
      console.log(`${fansPercent.toFixed(2)}%`);
    
}

solve(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);