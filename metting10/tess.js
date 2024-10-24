// let number1 = 4
// let number2 = 5

// let jumlah = number1 + number2
// let kurang = number1 - number2
// let kali = number1 * number2
// let bagi = number1 / number2

// console.log(jumlah)
// console.log(kurang)
// console.log(kali)
// console.log(bagi)


var operator = prompt('Enter operator( +, -, * or / ): ');
var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));
var result;
if(!isNaN(number1) && !isNaN(number2)){
   
} else {
    alert('Your input is not a number')
}
if (operator == '+') {
	result = number1 + number2
} else if (operator == '-') {
    result = number1-number2
} else if (operator == '*') {
    result = number1*number2
} else if (operator == '/') {
    result = number1/number2
} else {
    alert('No Operator choosen')
}
document.write(`${number1} ${operator} ${number2} = ${result}`);
