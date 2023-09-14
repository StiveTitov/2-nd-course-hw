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

const randomNumber = (random) => {

    while (random < 1 || random > 10) {
        random = Math.round((Math.random() * 10));
    }
    console.log(random);
}
randomNumber(Math.round((Math.random() * 10)));


// Задание 6
console.log('Задание 6');

