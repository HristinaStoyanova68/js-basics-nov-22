// Напишете програма, която познава дали резервоара на едно превозно средство
//  има нужда от презареждане на горивото или не. От конзолата се четат два
//   реда – текст и реално число, на първия ред се чете типа на 
//   горивото – текст с възможности: "Diesel", "Gasoline" или "Gas",
//    а на втория литрите гориво, които има в резервоара. Ако 
//    литрите гориво са повече или равни на 25, на конзолата да се
//     отпечата "You have enough {вида на горивото}.", ако са по-малко от 25,
//      да се отпечата "Fill your tank with {вида на горивото}!". В случай,
//  че бъде въведено гориво, различно от посоченото, да се отпечата
//   "Invalid fuel!".

// if (fuelLiters >= 25) {
//     console.log(`You have enough ${fuelTipe}.`)
// }




function fuelTank(input) {
    let fuelTipe = (input[0]);
    let fuelLiters = Number(input[1]);
   if (fuelTipe === "Diesel") {
    if (fuelLiters >= 25) {
        console.log(`You have enough diesel.`);
    } else {
        console.log(`Fill your tank with diesel!`);
    }
   } else if (fuelTipe === "Gasoline") {
    if (fuelLiters >= 25) {
        console.log(`You have enough gasoline.`);
    } else {
        console.log(`Fill your tank with gasoline!`);
    }
    } else if (fuelTipe === "Gas") {
        if (fuelLiters >= 25) {
            console.log(`You have enough gas.`);
        } else {
            console.log(`Fill your tank with gas!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
    
}

fuelTank(["Diesel","200"])