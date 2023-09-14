// Задание 1
console.log('Задание 1');

let str = 'js';
console.log(str.toUpperCase());

// Задание 2

const searchStart = (products, search) => {
    products.forEach((product) => {

        if (product.toLowerCase().includes(search.toLowerCase())) {
            let result = [];
            result.push(product);
            console.log(result);
        }
        return
    });
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []
