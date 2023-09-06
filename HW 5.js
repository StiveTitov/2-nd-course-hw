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

// Задание 2
console.log('Задание 2');
let number = Number(prompt('Введите число'));
// переменная printMessage обьявлена в первом задании
if (number % 2 == 0) {

    printMessage = function () {
        console.log(`Число ${number} -четное`);
    }

} else {

    printMessage = function () {
        console.log(`Число ${number} -нечетное`);
    }

}

printMessage();