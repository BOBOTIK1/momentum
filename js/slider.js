let sliderLeft = document.querySelector('.slider__arrow-left')
let sliderRight = document.querySelector('.slider__arrow-right')
let page = document.querySelector('.page-wrapper')
let randomImage = Math.floor(Math.random() * 20); 

/// слайдер с каруселью
function getImageByTime() {
    const img = new Image() /// пирсваиваем новую картинку
    const date = new Date() /// присваиваем дату с носителя
    const hour = date.getHours() /// заходим в дату и вытаскиваем от туда время
    if( randomImage == 0){
        randomImage = 1
    }
    if (randomImage < 10) {
        randomImage = "0" + randomImage
    }
    if (hour < 6) { 
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${randomImage}.jpg` /// вместо номера картинки вставляем (${randomImage}) чтоб бы вводилло рандомный номер картинки
        img.onload = () => { /// создоем функцию чтоб картинка менялась только при ее загрузке(чтоб не было пролага)
            page.style.backgroundImage = `url(${img.src})` /// задаем ссылку стилю бэкраунд имейдж
        };
    } else if (hour < 12) {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${randomImage}.jpg`
        img.onload = () => {
            page.style.backgroundImage = `url(${img.src})`
        };
    } else if (hour < 18) {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${randomImage}.jpg`
        img.onload = () => {
            page.style.backgroundImage = `url(${img.src})`
        };
    } else {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${randomImage}.jpg`
        img.onload = () => {
            page.style.backgroundImage = `url(${img.src})`
        };
    }
    ///setTimeout(getImageByTime, 5000) /// интервал между картинкой в слайдере
}
getImageByTime()

function getSlideNext() {
    randomImage = +randomImage + 1 /// к рандомному номеру картники добовляем +1
    if (randomImage >= 20){ /// если номер равен 20 (в данном случае последняя картинка в слайдере) 
        randomImage = 1 /// выводим первую
    }
}

sliderRight.addEventListener('click', getSlideNext) /// задаем ивент что при клике на кнопку применяем функцию ( getSlideNext) и меняем слайдер
sliderRight.addEventListener('click',  getImageByTime)  /// чтобы менялась картика


function getSlidePrev() { /// действуем от обратного как с верху
    randomImage = +randomImage - 1
    if (randomImage <= 0){
        randomImage = 20
    }
}

sliderLeft.addEventListener('click', getSlidePrev)
sliderLeft.addEventListener('click',  getImageByTime)