function setSection(i) {
    if (i == 1) {
        section1()
    } else if (i == 2) {
        section2()
    } else if (i == 3) {
        section3()
    }

}



function section1() {
    $("#section1-variable-examples").children().eq(1).hide();

    $("#section1-variable-let-examples").on("click", (event) => {
        $('#section1-variable-const-text:visible').hide();
        $('#section1-variable-let-text:hidden').show();
    });
    $("#section1-variable-const-examples").on("click", (event) => {
        $('#section1-variable-let-text:visible').hide();
        $('#section1-variable-const-text:hidden').show();
    })

    function findResult(operand1, operand2, operator) {
        if (!parseFloat(operand1) || !parseFloat(operand2)) {
            alert("Must Enter Two Numbers");
            return "Error";
        }
        if (operator == "") {
            alert("Must Enter an Operator");
            return "Error";
        }

        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);
        operators = ["+", "-", "*", "/", "&&", "||", "<", ">", "<=", ">="];
        if (!operators.includes(operator.toString())) {
            alert("Must Enter a Valid Operator");
            return "Error";
        }

        switch(operator.toString()) {
            case "+":
                return operand1 + operand2;
                break;
            case "-":
                return operand1 - operand2;
                break;
            case "*":
                return operand1 * operand2;
                break;
            case "/":
                return operand1 / operand2;
                break;
            case "&&":
                return Boolean(operand1 && operand2);
                break;
            case "||":
                return Boolean(operand1 || operand2);
                break;
            case "<":
                return Boolean(operand1 < operand2);
                break;
            case ">":
                return Boolean(operand1 > operand2);
                break;
            case "<=":
                return Boolean(operand1 <= operand2);
                break;
            case ">=":
                return Boolean(operand1 >= operand2);
                break;
            default:
              // code block
          }
    }

    $("#operating-equals").on("click", () => {
        let operand1 = $(".operand").eq(0).val();
        let operand2 = $(".operand").eq(1).val();
        let operator = $("#operator").val();
        let result;
        result = findResult(operand1, operand2, operator)

        
        $("#operator-result").text(result)
    })
}

function section2() {
    
}

function section3() {
    
}