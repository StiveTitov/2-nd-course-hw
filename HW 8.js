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

// Задание 2
function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(i);

    }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// Задание 1
console.log('Задание 1');

const people = [
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
