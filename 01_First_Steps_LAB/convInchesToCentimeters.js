function convInchesToCentimeters(input) {

    let inches = Number(input[0]);
    let coef = Number(2.54);

    let centimeters = inches * coef;

    console.log(centimeters);

    

}

convInchesToCentimeters("5");