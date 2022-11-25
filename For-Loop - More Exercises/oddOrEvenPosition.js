function solve(input) {

    let numCount = Number(input[0]);
    let evenSum = 0;
    let oddSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    for (let i = 1; i <= numCount; i ++) {
        let currNum = Number(input[i]);
        if (i % 2 === 0) {
            if (currNum >evenMax) {
                evenMax = currNum;
            } 
            if (currNum < evenMin) {
                evenMin = currNum;
            }
            evenSum = evenSum + currNum;
        } else {
            if (currNum > oddMax) {
                oddMax = currNum;
            } 
            if (currNum < oddMin) {
                oddMin = currNum;
            }
            oddSum = oddSum + currNum;
        }


    } if (oddSum !== 0) {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    } else {
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`); 
    } if (evenSum !== 0) {
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    } else {
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }
} 

solve(["1", "1"]);