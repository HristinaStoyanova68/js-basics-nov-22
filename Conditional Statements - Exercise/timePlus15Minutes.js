function timePlus15Minutes(input) {
    
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let allMinutes = Number(hour) * 60 + Number(minutes);
    let newTime = allMinutes + Number(15);

    let newHour = Math.floor(newTime / 60);
    let newMinutes = newTime % 60;
     if ( newHour === 24) {
        newHour = 0
     }
     if ( newMinutes < 10) {
        console.log(`${newHour}:0${newMinutes}`);
     } else {
        console.log(`${newHour}:${newMinutes}`);
     }



    }

timePlus15Minutes(["2", "33"]);