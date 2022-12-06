function solve(input) {

    let countJuniors = Number(input[0]);
    let countSeniors = Number(input[1]);
    let typeOfRoute = input[2];
    let juniorsFee = 0;
    let seniorsFee = 0;

    switch (typeOfRoute) {
        case "trail":
            juniorsFee = countJuniors * 5.50;
            seniorsFee = countSeniors * 7;
            break;
        case "cross-country":
            juniorsFee = countJuniors * 8;
            seniorsFee = countSeniors * 9.50;
            break;
        case "downhill":
            juniorsFee = countJuniors * 12.25;
            seniorsFee = countSeniors * 13.75;
            break;
        case "road":
            juniorsFee = countJuniors * 20;
            seniorsFee = countSeniors * 21.50;
            break;
    }
    let totalFee = juniorsFee + seniorsFee;
    let donationSum = 0;

    if (typeOfRoute === "cross-country") {
        if ((countJuniors + countSeniors) >= 50) {
            let totalFeeAfterDiscount = totalFee * 0.75;
            donationSum = totalFeeAfterDiscount * 0.95;
        } else {
            donationSum = totalFee * 0.95;
        }
    } else {
        donationSum = totalFee * 0.95;
    }
    console.log(`${donationSum.toFixed(2)}`);
}

solve(["21", "26", "cross-country"]); 