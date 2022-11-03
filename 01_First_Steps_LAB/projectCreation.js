function projectCreation(input) {

    let nameOfArchitect = (input[0]);
    let projects = (input[1]);
    let neededHours = 3;

    let calcHours = neededHours * projects;

    console.log(`The architect ${nameOfArchitect} will need ${calcHours} hours to complete ${projects} project/s.`)

}

projectCreation(["George","4"]);
