let button = document.querySelector('.quotes__button')
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')


/// Рандом Цитаты
button.addEventListener('click',async () => {
    const quotes = 'data.json';
    const res = await fetch(quotes); /// берем строку
    const data = await res.json(); /// преобразуем в массив
    let randomNum = Math.floor(Math.random() * data.length); /// получаем рандомное число (length = длина массива) (floor = округление) (data = массив)
    quote.textContent = data[randomNum].text
    author.textContent = data[randomNum].author
})
