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
    arryRiddle2 = arryRiddle2.sort(() => Math.random() - 0.5);
    alert(arryRiddle2);

    const answerUser1 = prompt('Напишите первое слово'); // сохраняем
    // ответ пользователя в переменную answerUser1
    const answerUser2 = prompt('Напишите последнее слово'); // сохраняем
    // ответ пользователя в переменную answerUser1
    const answer1 = arryRiddle2[0]; // храним правильный ответ в переменной answer
    const answer2 = arryRiddle2[6]; // храним правильный ответ в переменной answer

    if (answerUser1.toLowerCase() === answer1.toLowerCase() && answerUser2.toLowerCase() === answer2.toLowerCase()) { // проверяем, совпадает ли строка, полученная от пользователя, с правильным ответом
        // и теперь нам не важно, в каком регистре какие буквы ввел пользователь, мы все приводим к нижнему регистру
        alert('Отлично! Это правильный ответ!'); // это сообщение, если совпала
    } else if (answerUser1.toLowerCase() === answer1.toLowerCase() || answerUser2.toLowerCase() === answer2.toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert(`К сожалению вы не угадали. Правильный ответ: ${answer1} и ${answer2}`); // а это, если не совпала
    }

}