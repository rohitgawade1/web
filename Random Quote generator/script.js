const nextBtn = document.getElementById('nextBtn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

init();


function init() {
    fetchApi();
    nextBtn.addEventListener('click', fetchApi);
}

async function fetchApi() {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    quote.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${data.content} <i class="fa-solid fa-quote-right"></i>`;
    author.innerHTML = `~ ${data.author}`;
}