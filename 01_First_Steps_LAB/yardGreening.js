function yardGreening(input) {

    let yard = Number(input[0]);
    let yardPrice = yard * 7.61;
    let discount = yardPrice * 0.18;
    let totalPrice = yardPrice - discount;


    console.log("The final price is: " + totalPrice +  " lv.");
    console.log("The discount is: " + discount + " lv.");

}

yardGreening(["550"]);