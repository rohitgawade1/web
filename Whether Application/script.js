const input = document.getElementById('input');
const goBtn = document.getElementById('btn');
const degree = document.getElementById('degree');
const locationHeading = document.getElementById('location_heading')
const windSpeed = document.getElementById('wind_speed');
const humidity = document.getElementById('humidity');
const clouds = document.getElementById('clouds');
const whetherImage = document.getElementById('image');

whetherImage.setAttribute('hidden', 'hidden');
init();

function init(){
        goBtn.addEventListener('click', fetchApi);
        document.addEventListener('keypress', (e) => {
            if(e.key === 'Enter'){
                fetchApi();
            }
        })
}


async function fetchApi() {
    const res1 = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input.value}&appid=56696403b13d82de999b8aa5f371d1cc`);
    const latLonData = await res1.json();
    whetherImage.removeAttribute('hidden');
    
    // console.log(latLogData[0]);
    const lat = latLonData[0].lat;
    const lon = latLonData[0].lon;

    const res2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=56696403b13d82de999b8aa5f371d1cc`);
    const data = await res2.json();

    degree.innerHTML = `${((data.main.temp - 32) * 5/9).toFixed(2)} &deg; C`;
    windSpeed.innerHTML = `${(data.wind.speed * 1.609).toFixed(2)} km/h`;
    humidity.innerHTML = `${data.main.humidity} %`;
    clouds.innerHTML = `${data.clouds.all} %`;
    // console.log(data.weather[0].icon)
    whetherImage.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    locationHeading.innerHTML = input.value.charAt(0).toUpperCase() + input.value.slice(1);
}   




































// let a = 10;
// {
    
// console.log(a);
// }

// let arr = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// let arrSort = arr.sort((a,b) => {
//     return a - b
// })

// for(let i = 0 ;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr)