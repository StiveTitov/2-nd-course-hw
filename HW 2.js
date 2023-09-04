let a = 10;
let date = 2007;
let nameDeveloper = 'Брендан';
let ten = 10;
let two = 2;
let result;
let b = 2;
let num = 1;


alert(a);
alert(a + 20);
alert(date);
alert(nameDeveloper);
alert(ten + two);
alert(ten - two);
alert(ten * two);
alert(ten / two);
result = 2 ** 5;
alert(result);

// Задание 6
a = 9;
alert(a % b);

// Задание 7
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = Number(prompt('Сколько вам лет?'));
alert(age);

// Задание 9.0
const user = {
    name: 'Олег',
    age: 30,
    isAdmin: true,
};

// Задание 9.1

user['city of residence'];

// Задание 9.2

user['age'] = 32;

// Задание 9.3

delete user['city of residence'];

// Задание 9.4

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
user['name'] = prompt("Как Вас зовут?");
alert(`Привет, ${user['name']}!`);