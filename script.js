const id = document.getElementById('id')
const quote = document.getElementById('quote')
const btn = document.getElementById('btn')

fetch('https://dummyjson.com/quotes/random')
    .then((val) => val.json())
    .then((data) => {
        id.innerText = data.id
        quote.innerText = data.quote
    })

btn.addEventListener('click', () => {
    fetch('https://dummyjson.com/quotes/random')
        .then((val) => val.json())
        .then((data) => {
            id.innerText = data.id
            quote.innerText = data.quote
        })
})

btn.addEventListener('mouseenter', () => {
    const glow = document.getElementById('glow')
    glow.classList.remove('hidden')
})

btn.addEventListener('mouseleave', () => {
    const glow = document.getElementById('glow')
    glow.classList.add('hidden')
})
