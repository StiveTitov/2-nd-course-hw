// Задание 1
let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));

let printMessage;

if (firstNumber > secondNumber) {

    printMessage = function () {
        console.log(secondNumber);
    }

} else {

    printMessage = function () {
        console.log(firstNumber);
    }

}

printMessage();

