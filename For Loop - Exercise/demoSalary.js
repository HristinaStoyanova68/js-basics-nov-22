function solve(input) {

    let numsTabs = Number(input[0]);
    let salary = Number(input[1]);
    
    for (let i = 2; i <= numsTabs + 1; i ++) {
        let currNumTab = input[i];
        if (currNumTab === "Facebook") {
            salary = salary - 150.00;         //-> 150 лв)
        } else if (currNumTab === "Instagram") {
            salary = salary - 100.00;         // -> 100 лв.)
    
        } else if (currNumTab === "Reddit") {
            salary = salary - 50.00;         //-> 50 лв)
        }
                  
    } if (salary <= 0) {
        console.log(`You have lost your salary.`);
        return;
    } else {
        console.log(Math.round(salary));
    }   
}

solve(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"]);