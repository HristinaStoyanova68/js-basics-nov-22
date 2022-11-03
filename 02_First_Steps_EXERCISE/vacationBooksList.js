function vacationBooksList (input) {

    let allPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursForAllPAges = allPages / pagesPerHour;
    let hoursPerDay = hoursForAllPAges / days;

    console.log(hoursPerDay);
}

vacationBooksList(["212","20","2"]);