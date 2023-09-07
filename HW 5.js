// Задание 1

const printMessage = (firstNumber, secondNumber) => {
    firstNumber = Number(prompt('Введите первое число'));
    secondNumber = Number(prompt('Введите второе число'));
    if (firstNumber > secondNumber) {
        console.log(secondNumber);
        return
    }
    console.log(firstNumber);
}
printMessage();

// Задание 2
console.log('Задание 2');
const getNumber = (number) => {
    if (number % 2 === 0) {
        console.log(`Число ${number} -четное`);
        return
    }
    console.log(`Число ${number} -нечетное`);
}
getNumber(Number(prompt('Введите число')));

// Задание 3.1
console.log('Задание 3.1');
const getUserNumber = (userNumber) => {
    console.log(`Ответ: ${userNumber ** 2}`);
}
getUserNumber(Number(prompt('Введите число')));

// Задание 3.2
console.log('Задание 3.2');
const getSecondNumber = (userSecondNumbe) => {
    return userSecondNumbe ** 2;
}
let result = getSecondNumber(Number(prompt('Введите число')));
alert(result);

// Задание 4
console.log('Задание 4');
const getUserAge = (userAnswer) => {
    if (userAnswer < 0) {
        return alert('Вы ввели неправильное значение');
    } else if (userAnswer >= 0 && userAnswer <= 12) {
        return alert('Привет, друг!');
    }
    return alert('Добро пожаловать!');
}
getUserAge(Number(prompt('Введите пожалуйста свой возраст')));

// Задание 5

console.log('Задание 5');
const printNewMessage = (firstNumber, secondNumber) => {
    firstNumber = prompt('Введите первое число');
    secondNumber = prompt('Введите второе число');

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return console.log('Одно или оба значения не являются числом');
    }
    console.log(firstNumber * secondNumber);
}
printNewMessage();

