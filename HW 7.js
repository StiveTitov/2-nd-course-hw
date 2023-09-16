// Задание 1
console.log('Задание 1');

let str = 'js';
console.log(str.toUpperCase());

// Задание 2
console.log('Задание 2');

const searchStart = (products, search) => {
    products.forEach((product) => {

        if (product.toLowerCase().includes(search.toLowerCase())) {
            let result = [];
            result.push(product);
            console.log(result);
        }
        return;
    });
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

// Задание 3
console.log('Задание 3');

console.log(Math.floor(32.58884));//До меньшего целого
console.log(Math.ceil(32.58884));//До большего целого
console.log(Math.round(32.58884));//До ближайшего целого

// Задание 4
console.log('Задание 4');

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
console.log('Задание 5');

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    return
}
getRandomIntInclusive(1, 10);


// Задание 6
console.log('Задание 6');

const getRandomArrNumbers = (max) => {
    max = Math.floor(max);
    let arry = [];
    let lengthArry = Math.floor(max / 2);
    for (i = 0; i < lengthArry; i++) {
        arry.push(Math.floor(Math.random() * (max + 1)));
    }
    console.log(arry);
    return;
}
getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6
getRandomArrNumbers(100);
getRandomArrNumbers(89);


// Задание 7
console.log('Задание 7');

const getRandomInclusive = (a, b) => {
    a = Math.ceil(a);
    b = Math.floor(b);
    console.log(Math.floor(Math.random() * (b - a + 1)) + a);
    return;
}
getRandomInclusive(3, 7);

// Задание 8
console.log('Задание 8');

let myDate = new Date();
console.log(myDate);

// Задание 9
console.log('Задание 9');

let currentDate = new Date();
currentDate.setDate(73);
console.log(currentDate);

// Задание 10
console.log('Задание 10');

const funcDate = (newDate) => {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    // создадим массив, где будем хранить названия месяцев на русском
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let hour = newDate.getHours(); // получаем час из нашей даты
    let minute = newDate.getMinutes(); // получаем минуты
    let second = newDate.getSeconds(); // получаем секунды

    if (hour < 10) { // если будет меньше 10,
        hour = "0" + hour; // то перед ними поставим 0
    }
    if (minute < 10) { // если минут будет меньше 10,
        minute = "0" + minute; // то перед ними поставим 0
    }
    if (second < 10) { // если секунд будет меньше 10,
        second = "0" + second; // то перед ними поставим 0
    }
    let fullDate = "Дата: " + newDate.getDate() + // getDate возвращает число
        " " + months[newDate.getMonth()] + // getMonth возвращает номер месяца, который мы можем использовать в качестве индекса для массива months
        " " + newDate.getFullYear() + // getFullYear возвращает год
        ", " + days[newDate.getDay()] + // getDay возвращает номер дня недели, который мы используем в качестве индекса для массива days
        "\n" + "Время: " + hour + ":" + minute + ":" + second;

    console.log(fullDate);
}
funcDate(new Date());