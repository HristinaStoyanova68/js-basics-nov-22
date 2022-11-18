function basketballEquipment(input) {

    let annualFee = Number(input[0]);

    let shoes =annualFee - (annualFee * 0.40);
    let outfit = shoes - (shoes * 0.20);
    let ball = outfit * 0.25;
    let accessories = ball * 0.20;

    let totalsum = annualFee + shoes + outfit + ball + accessories;

    console.log(totalsum.toFixed(2));


}

basketballEquipment(["230"]);