// Задание 1
let i = 0;
while (i < 2) {
    alert('Привет');
    i++;
}

// Задание 2
console.log('Задание 2');
i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

// Задание 3
console.log('Задание 3');
i = 7;
while (i < 23) {
    console.log(i);
    i++;
}

// Задание 4
console.log('Задание 4');
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов.`);
}
// Задание 5
console.log('Задание 5');
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
}
console.log(`Итераций: ${num}, переменная 'n'=${n}`);