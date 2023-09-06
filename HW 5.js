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
    number = Number(prompt('Введите число'));
    if (number % 2 === 0) {
        console.log(`Число ${number} -четное`);
        return
    }
    console.log(`Число ${number} -нечетное`);
}
getNumber();

// Задание 3.1
console.log('Задание 3');
const getUserNumber = (userNumber) => {
    userNumber = Number(prompt('Введите число'));
    userNumber = userNumber ** 2;
    console.log(`Ответ: ${userNumber}`);
}
getUserNumber();

