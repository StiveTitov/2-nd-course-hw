// Задание 1

const printMessage = (firstNumber, secondNumber) => {
    firstNumber = Number(prompt('Введите первое число'));
    secondNumber = Number(prompt('Введите второе число'));
    if (firstNumber > secondNumber) {
        console.log(secondNumber);
    } else {
        console.log(firstNumber);
    }
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
    alert(userSecondNumbe ** 2);
}
getSecondNumber(Number(prompt('Введите число')))


