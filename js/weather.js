
let weatherInput = document.querySelector('.weather__input')
let weatherIcon = document.querySelector('.weather-icon')
let descriptionCotainer = document.querySelector('.description__cotainer')
let temperature = document.querySelector('.temperature')
let weatherDescription = document.querySelector('.weather-description')
let windSpeed = document.querySelector('.wind-speed')
let humidity = document.querySelector('.humidity')


/// асинхронная функция вывода информации о погоде
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherInput.value}&lang=ru&appid=dfd93510da1790cf0db8b980318248ca&units=metric`
    const res = await fetch(url)
    const data = await res.json(); /// перевод fetch для последующей работы
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = Math.floor(data.main.temp) + '°C'; /// добавление приписки
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = `Скорость ветра:${data.wind.speed}м/с`; /// так же добавление приписки
    humidity.textContent = `Влажность:${data.main.humidity}%`;
}

getWeather()
/// функций ввода города
weatherInput.addEventListener('keydown', function(e) { // Функция нажатия клавиши
    if (e.keyCode === 13) { /// 13 = код клавиши enter  
        getWeather() //  новый вызов функции 
    }
})
function setLocalStorage() {
    localStorage.setItem('weatherInput', weatherInput.value); /// сохранение названия города
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
    if(localStorage.getItem('weatherInput')) {
        weatherInput.value = localStorage.getItem('weatherInput')
    }
}
window.addEventListener('load', getLocalStorage)
window.addEventListener('load', getWeather)