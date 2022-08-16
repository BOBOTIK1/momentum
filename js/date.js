let time = document.querySelector('.time')
let data = document.querySelector('.date')
let timeOfDay = document.querySelector('.time-of-day')
let input = document.querySelector('.name')


/// Время 
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString(); /// выводить время в виде строки
    const options = {weekday: 'long', day: 'numeric', month: 'long'};
    const currentDate = date.toLocaleDateString('ru-RU', options); /// выводить дату строкой на русском языке
    time.textContent = currentTime; /// выводим переменные ввиде текста
    data.textContent = currentDate;
    setTimeout(showTime, 1000);
    hello()
}
showTime();


/// Приветствие
function hello() {
    const date = new Date();
    const Hour = date.getHours();
    if(Hour < 6) {
        timeOfDay.textContent = "Доброй ночи,"
    }else if(Hour < 12) {
        timeOfDay.textContent = "Доброе утро,"
    }else if(Hour < 18) {
        timeOfDay.textContent = "Добрый день,"
    }else {
        timeOfDay.textContent = "Добрый вечер,"
    }
}

/// Хранилище (имени)
function setLocalStorage() {
    localStorage.setItem('name', input.value);
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
    if(localStorage.getItem('name')) {
    input.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)