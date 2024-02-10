//function to display the calculations
function calculations(){
let num1= parseFloat(document.getElementById('val1').value);
let num2=parseFloat(document.getElementById('val2').value);
let operator=document.getElementById('operator').value;
let result;

    switch (operator) {
        case "+":
        result = num1+num2;
        break;
        case "-":
        result = num1-num2;
        break;
        case "*":
        result = num1*num2;
        break;
        case "%":
        result = num1%num2;
        break;
        case "/":
        result = num1/num2;
        break;
        case "**":
        result = num1**num2;
        break;
        default:
            alert('select an operator')
    }

    console.log(result)
    document.getElementById('res').value=result
}
