function solve(input) {

    let index = 0;
    let word = input[index];
    index++;

    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let maxWord = "";

    while (word !== "End of words") {

        for (let i = 0; i < word.length; i++) {

            sum += word.charCodeAt(i);

        }
        let firstLetter = word[0];
        if (firstLetter === "a" ||
            firstLetter === "A" ||
            firstLetter === "e" ||
            firstLetter === "E" ||
            firstLetter === "i" ||
            firstLetter === "I" ||
            firstLetter === "o" ||
            firstLetter === "O" ||
            firstLetter === "u" ||
            firstLetter === "U" ||
            firstLetter === "y" ||
            firstLetter === "Y") {
            sum = sum * word.length;
        } else {
            sum = Math.floor(sum / word.length);
        }


        if (sum > max) {
            max = sum;
            maxWord = word;
        }

        word = input[index];
        index++;
        sum = 0;
    }
    console.log(`The most powerful word is ${maxWord} - ${max}`);

}

solve([
    "The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"]);