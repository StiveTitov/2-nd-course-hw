// Задание 1
console.log('Задание 1');
let arry = [1, 5, 4, 10, 0, 3];
let i = 0
while (i <= 3) {
    console.log(arry[i]);
    i++;
}
// Задание 2
console.log('Задание 2');
arry = [1, 5, 4, 10, 0, 3];
console.log(arry.indexOf(4));

// Задание 3
console.log('Задание 3');
arry = [1, 3, 5, 10, 20];
console.log(arry.join(' '));

// Задание 4
console.log('Задание 4');
let arr = [];

for (i = 0; i < 3; i++) {
    arr[i] = []; // создаем подмассив

    for (let j = 0; j < 3; j++) {
        arr[i].push(1); // заполняем подмассив числом 1
    }
}

console.log(arr);

// Задание 5
console.log('Задание 5');

arr = [1, 1, 1];
for (j = 0; j < 3; j++) {
    arr.push(2); // заполняем массив числом 2
}

console.log(arr);

// Задание 6
console.log('Задание 6');
arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
arr.pop();
console.log(arr);

// Задание 7
console.log('Задание 7');
arr = [9, 8, 7, 6, 5];
let getNumber = Number(prompt('Угадай число от 5 до 9'));
let search = arr.includes(getNumber);
if (search != true) {
    alert('Не угадал');
} else {
    alert('Угадал');
}

// Задание 8
console.log('Задание 8');
let arrEmpty = [];
let row = 'abcdef';
let z;
arr = row.split('');
for (i = 0; i < 6; i++) {
    z = arr.pop();
    arrEmpty.push(z);
}
arrEmpty = arrEmpty.join('');
console.log(arrEmpty);