function solve(input) {

    let h = Number(input[0]);
    let l = Number(input[1]);
    let percent = Number(input[2]);
    let currPaintAmount = 0;
    let sumPaint = 0
    let allPaintingArea = h * l * 4;
    let paintingAreaAfterPercent = allPaintingArea -(allPaintingArea * percent / 100);


    for (let i = 3; i <= input.length + 1; i ++) {

        currPaintAmount = input[i];


        if (currPaintAmount === "Tired!") {
            if (paintingAreaAfterPercent > sumPaint) {
           
                areaLeft = paintingAreaAfterPercent - sumPaint;
                

            console.log(`${Math.ceil(areaLeft)} quadratic m left.`);
             } return;
        } else {
            currPaintAmount = Number(input[i]);
            sumPaint = sumPaint + currPaintAmount;
           
            if (paintingAreaAfterPercent < sumPaint) {
           
           paintLeft = sumPaint - paintingAreaAfterPercent;
           
           console.log(`All walls are painted and you have ${paintLeft} l paint left!`); 
          
            }
            if (paintingAreaAfterPercent === sumPaint) {
                
                console.log(`All walls are painted! Great job, Pesho!`);
            }
        }
    }

}

solve(["2", "3", "25", "6", "7", "8"]);
