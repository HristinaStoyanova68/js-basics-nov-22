function solve(input) {

    let numsTabs = Number(input.shift());
    let salary = Number(input.shift());
    
    for (let i = 0; i <= numsTabs; i ++) {
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