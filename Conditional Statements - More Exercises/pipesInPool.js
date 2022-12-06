function pipesInPool(input) {

    let vPoolVolume = Number(input[0]);
    let p1FirsPipeLiters = Number(input[1]);
    let p2SecondPipeLiters = Number(input[2]);
    let hHours = Number(input[3]);

    let firstPipeFilling = p1FirsPipeLiters * hHours;
    let secondPipeFilling = p2SecondPipeLiters * hHours;
    
    let percentFirstPipe = firstPipeFilling * 100 / vPoolVolume;
    let percentSecondPipe = secondPipeFilling * 100 / vPoolVolume;
    let allPercentFilling = percentFirstPipe + percentSecondPipe;

    if (allPercentFilling <= 100) {
        let finalPercentFirstPipe = percentFirstPipe * 100 / allPercentFilling;
        let finalPercentSecondPipe = percentSecondPipe * 100 / allPercentFilling;
        console.log(`The pool is ${allPercentFilling}% full. Pipe 1: ${finalPercentFirstPipe.toFixed(2)}%. Pipe 2: ${finalPercentSecondPipe.toFixed(2)}%.`)
    } else {
        let realFillingLiters = firstPipeFilling + secondPipeFilling;
        let overLiters = realFillingLiters - vPoolVolume;

        console.log(`For ${hHours} hours the pool overflows with ${overLiters.toFixed(2)} liters.`)
    }
    

}

pipesInPool(["100","100","100","2.5"])