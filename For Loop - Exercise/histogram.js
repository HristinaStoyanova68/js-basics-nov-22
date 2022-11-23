function solve(input) {

    let numsCount = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;
   
    for (let i = 1; i <= numsCount; i ++) {
            let currNum = Number(input[i]);

            if (currNum < 200) {
                p1Count ++;
            } else if (currNum < 400) {
                p2Count ++;
            } else if (currNum < 600) {
                p3Count ++;
            } else if (currNum < 800) {
                p4Count ++;
            } else {
                p5Count++;
            }

    }
        let p1Percent = (p1Count / numsCount) * 100;
        let p2Percent = (p2Count / numsCount) * 100;
        let p3Percent = (p3Count / numsCount) * 100;
        let p4Percent = (p4Count / numsCount) * 100;
        let p5Percent = (p5Count / numsCount) * 100;

        console.log(`${p1Percent.toFixed(2)}%`);
        console.log(`${p2Percent.toFixed(2)}%`);
        console.log(`${p3Percent.toFixed(2)}%`);
        console.log(`${p4Percent.toFixed(2)}%`);
        console.log(`${p5Percent.toFixed(2)}%`);



}

solve(["7", "800", "801", "250", "199", "399", "599", "799"]);