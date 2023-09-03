// Задание 1
let password = 'admin';
let answer = prompt('Введите пароль');
if (answer === password) {
    console.log('Пароль введен верно');
}
else {
    console.log('Пароль введен неправильно');
}


// Задание 2
let c = Number(prompt('Введите число'));
c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

// Задание 3
let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));
d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');
