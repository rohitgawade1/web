const input = document.getElementById('input');
const searchBtn = document.getElementById('searchBtn');
const subContainer = document.getElementById('sub_container');
const meaningPara = document.getElementById('meaning_para');
const audioTag = document.getElementById('audio');
audioTag.setAttribute('hidden', 'hidden');
init();

function init() {
    searchBtn.addEventListener('click', fetchApi);
}

async function fetchApi() {
    const res = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input.value}?key=0751d4be-85d1-4ee4-bf01-b9f7a1f7ddda`);
    const data = await res.json();
    renderData(data);
}

function renderData(data) {
    // let html = '';

    let audio = data[0].hwi.prs[0].sound.audio;
    meaningPara.innerHTML = data[0].shortdef;
    audioTag.removeAttribute('hidden');
    audioTag.setAttribute('src', `https://media.merriam-webster.com/audio/prons/en/us/mp3/${input.value.charAt(0)}/${audio}.mp3`)
   
    // html = `<p id="meaning_para">${data[0].shortdef}</p>
    // <audio src="" controls id="audio">${``}</audio>`;

        // console.log(data[0].shortdef);
    // subContainer.innerHTML = html;
    input.value = '';

}