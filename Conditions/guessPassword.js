function guessPassword(input) {
    let pass = input["0"]
    let currPass = "s3cr3t!P@ssw0rd";
    

    if (currPass === pass) {
        console.log("Welcome")
    } else { 
        console.log("Wrong password!")
    }
}

guessPassword(["s3cr3t!P@ssw0rd"]);