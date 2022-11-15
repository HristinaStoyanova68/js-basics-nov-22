function onTimeForExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let ariiveHour = Number(input[2]);
    let arriveMin = Number(input[3]);
    difference = 0;
    
    totalExamMin = examHour * 60 + examMin;
    totalArriveMin = ariiveHour * 60 + arriveMin;

     if (totalArriveMin === totalExamMin) {
       console.log(`On time`);
     } else if (totalArriveMin < totalExamMin) {
        difference = totalExamMin - totalArriveMin;
        
        if (difference <= 30) {
            console.log(`On time`);   
            console.log(`${difference} minutes before the start`);
                } else {
                    console.log(`Early`);    
                    if (difference > 30 && difference < 60) {
            console.log(`${difference} minutes before the start`);
                } 
               } if (difference >= 60) {
                    if ((difference % 60) < 10) {
                    console.log(`${Math.trunc(difference / 60)}:0${(difference % 60)} hours before the start`);
                    } else {
                        console.log(`${Math.trunc(difference / 60)}:${(difference % 60)} hours before the start`);
                    }
            } 
        } else  {
        console.log(`Late`);
        difference = totalArriveMin - totalExamMin;
        if (difference !== 0 && difference < 10) {       
                console.log(`${difference} minutes after the start`);
            } else if (difference>= 10 && difference < 60)  {
                console.log(`${difference} minutes after the start`);
            } else if (difference >= 60) {
                if ((difference % 60) < 10) {
                    console.log(`${Math.trunc(difference / 60)}:0${(difference % 60)} hours after the start`);
                    } else {
                    console.log(`${Math.trunc(difference / 60)}:${(difference % 60)} hours after the start`);
            }
        }  
    }   
} 
onTimeForExam(["16", "00", "17", "00"]);