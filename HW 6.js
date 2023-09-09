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