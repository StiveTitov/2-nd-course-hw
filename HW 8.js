function callbackWithArrayLength(arr, callback) {
    // console.log(arr);

    callback(arr.length);
}

callbackWithArrayLength([1], (length) => {
    console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
});

// Задача 2
console.log('------------------');
function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);

    }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

console.log('------------------');

function add5(number) {
    return number + 5;
}

function add10(number) {
    return number + 10;
}

console.log(add5(3)); // => 8
console.log(add10(3)); // => 13

console.log('------------------');

function square(number) {
    return number * number;
}

function squareRoot(number) {
    return Math.sqrt(number);
}

function map(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        output.push(ruleFunction(arr[i]));
    }

    return output;
}

console.log(map([1, 4, 9, 16], square)); // => [ 1, 16, 81, 256 ]
console.log(map([1, 4, 9, 16], squareRoot)); // => [ 1, 2, 3, 4 ]
console.log(map([1, 1, 2, 3, 5, 8], (number) => number * 2)); // => [2, 2, 4, 6, 10, 16]
console.log(map([1, 1, 2, 3, 5, 8], (number) => number + 10)); // => [11, 11, 12, 13, 15, 18]
console.log('-----------------------------------');




// Задание 1
console.log('Задание 1');

let people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort(function (varA, varB) {
    if (varA.age > varB.age) {
        return 1;
    }
    if (varA.age < varB.age) {
        return -1;
    }
    return 0;
}));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

// Задание 2
console.log('Задание 2');

people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

function isPositive(number) {
    // писать код тут
    if (number > 0) {

        return number;
    }
}
function isMale() {
    // писать код тут
}
function filter(arr, ruleFunction) {
    // писать код тут
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        output.push(ruleFunction(arr[i]));
    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]


console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3
console.log('Задание 3');

const timer = (deadline) => {

    let time = 30;
    const interval = setInterval(() => {
        time -= 1;
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Время истекло!')
    }, deadline * 1000)
};

const deadline = 30;
timer(deadline);

// Задание 4
console.log('Задание 4');
