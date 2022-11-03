function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let timeOfDeposit = Number(input[1]);
    let annualInterestRate =Number(input[2] / 100);
    let annualInterest = depositSum * annualInterestRate;
    let interestPerMonth = annualInterest / 12;
    let totalSum = depositSum + (timeOfDeposit * interestPerMonth);

    console.log(totalSum);

}

depositCalculator(["200","3","5.7"]);