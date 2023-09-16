function makeRiddle() {
    let askUser = prompt('Введите номер месяца');
    if (askUser == 1 || askUser == 2 || askUser == 12) {
        alert('Зима');
    } else if (askUser > 2 && askUser <= 5) {
        alert('Весна');
    } else if (askUser > 5 && askUser <= 8) {
        alert('Лето');
    } else if (askUser > 8 && askUser <= 11) {
        alert('Осень');
    } else {
        alert('Введёное значение противоречит условию');
    }
}

function makeRiddle2() {
    let arryRiddle2 = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    alert(arryRiddle2);

}