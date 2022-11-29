function solve(input) {

    let bookSearched = input[0];

    let index = 1;
    let currBook = input[index];
    index ++;
    let booksChecked = 0;

    while(currBook !== "No More Books") {

        if (currBook === bookSearched) {
            console.log(`You checked ${booksChecked} books and found it.`);
            return;
        } 
        booksChecked ++;
        currBook = input[index];
        index ++;

    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksChecked} books.`);
    

}  


solve(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"]);