// •	Първи ред – държава – текст ("Russia", "Bulgaria" или "Italy")
// •	Втори ред – уред - текст ("ribbon", "hoop" или "rope")



function gymnastics(input) {

    let country = input[0];
    let gymAppliance = input[1];
    let totalScore = 0.00;
    let neededPercent = 0;

    switch (country) {
        case "Russia":
            if (gymAppliance === "ribbon") {
                totalScore = Number(9.100) + Number(9.400); 
            } else if (gymAppliance === "hoop") {
                totalScore = Number(9.300) + Number(9.800);
            } else if(gymAppliance === "rope") {
                totalScore = Number(9.600) + Number(9.000);
            }
            break;
        case "Bulgaria":
            if (gymAppliance === "ribbon") {
                totalScore = Number(9.600) + Number(9.400); 
            } else if (gymAppliance === "hoop") {
                totalScore = Number(9.550) + Number(9.750);
            } else if(gymAppliance === "rope") {
                totalScore = Number(9.500) + Number(9.400);
            }
            break;
        case "Italy":
            if (gymAppliance === "ribbon") {
                totalScore = Number(9.200) + Number(9.500); 
            } else if (gymAppliance === "hoop") {
                totalScore = Number(9.450) + Number(9.350);
            } else if(gymAppliance === "rope") {
                totalScore = Number(9.700) + Number(9.150);
            }
            break;

        }   let scorePercent = totalScore / 20 * 100;
            neededPercent = 100 - scorePercent;
        
            console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${gymAppliance}.`);
            console.log(`${neededPercent.toFixed(2)}%`);

}

gymnastics(["Italy", "hoop"]);


