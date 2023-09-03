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