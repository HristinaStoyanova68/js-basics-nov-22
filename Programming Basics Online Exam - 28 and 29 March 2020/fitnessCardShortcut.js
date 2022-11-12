function fitnessCardShortcut(input) {

    let allMoney = Number(input[0]);
    let gender = (input[1]);
    let age = Number(input[2]);
    let sport = (input[3]);

    if (gender === "m") {
        if (sport === "Gym") {
            money = 42;
            } else if (sport === "Boxing") {
                money = 41;
            } else if (sport === "Yoga") {
                money = 45;
            } else if (sport === "Zumba") {
                money = 34;
            } else if (sport === "Dances") {
                money = 51;
            } else if (sport === "Pilates") {
                money = 39;
            }
    } else if (gender === "f") {
        if (sport === "Gym") {
                money = 35;
            } else if (sport === "Boxing") {
                money = 37;
            } else if (sport === "Yoga") {
                money = 42;
            } else if (sport === "Zumba") {
                money = 31;
            } else if (sport === "Dances") {
                money = 53;
            } else if (sport === "Pilates") {
                money = 37;
            } 
        } if (age <= 19) {
        if (allMoney >= money * 0.80) {
            console.log(`You purchased a 1 month pass for ${sport}.`);
        } else {
            neededMoney = (money * 0.80) - allMoney;
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`); 
        }
    } else {
        if (allMoney >= money) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        neededMoney = money - allMoney;
        console.log(`You don't have enough money! You need $${neededMoney.toFixed(2)} more.`);
    }
}

    }


fitnessCardShortcut(["50","m","23","Gym"]);
