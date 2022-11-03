function fishTank(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentOccupiedSpace = Number(input[3] / 100);
    let capacityTank = lenght * width * hight * Number(0.001);
    let occupiedSpace = capacityTank * percentOccupiedSpace;

    let capacityWater = capacityTank - occupiedSpace;
    
    console.log(capacityWater);
    
}

fishTank(["85","75","47","17"]);