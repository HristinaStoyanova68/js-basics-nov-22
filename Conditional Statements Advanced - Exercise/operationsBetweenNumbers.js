function operationsBetweenNumbers(input) {
    
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    result = 0.00;
    type = "various";
    remainder = 0.00;


    //: "+", "-", "*", "/", "%


    switch (operator) {
        case "+":
            result = n1 + n2;
            if (result % 2 === 0) {
                type = "even";
                
                } else {
                    type = "odd";
                }
                console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
                break;
          
        case "-":
            result = n1 - n2;
            if (result % 2 === 0) {
                type = "even";
                
                } else {
                    type = "odd";
                }
                console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
                break;
        case "*":
            result = n1 * n2;
            if (result % 2 === 0) {
                type = "even";
                
                } else {
                    type = "odd";
                }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`);
            break;
        case "/":
            result = n1 / n2;
            if (n2 !== 0)
            {
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }
            break;
        case "%":
            remainder = n1 % n2;
            if (n2 !== 0) {
                console.log(`${n1} % ${n2} = ${remainder}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }
            break;
    } 

}

operationsBetweenNumbers(["10", "12", "+"]);