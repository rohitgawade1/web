const massInput = document.getElementById('mass-input');
const select = document.getElementById('select');
const calculateBtn = document.getElementById('calc');
const options = document.querySelectorAll('option');
const image = document.getElementById('image');
const weightofObject = document.getElementsByClassName('weight')[0];
const error = document.getElementsByClassName('error')[0];
const displayPlanet = document.getElementsByClassName('planets')[0];


const surfaceGravity = {
    mercury: 3.7,
    venus: 8.87,
    earth: 9.8,
    mars: 3.71,
    jupiter: 24.92,
    saturn: 10.44,
    uranus: 8.87,
    neptune: 11.15,
    pluto: 0.58,
    moon: 1.62
};

init();
function init() {
    
    select.addEventListener('change', getPlanet);
    calculateBtn.addEventListener('click', calculateWeight);

}


// Weight = mass * surface gravity





function calculateWeight() {
    let mass = massInput.value;
    if(mass === '' || select.value === ''){
        error.style.display = 'flex';
        displayPlanet.style.display = 'none';
    }
//    (event) => {
//         let planet = event.target.value;
//         let mass = massInput.value;
//         console.log(planet)
//         let weight = mass * surfaceGravity[planet];
//         console.log(surfaceGravity[planet]);
//         image.setAttribute('src', `./ProjectImage/${planet}.png`)
//    });
     else{
        displayPlanet.style.display = 'flex';
        error.style.display = 'none';
        let weight = mass * surfaceGravity[select.value];
         weightofObject.innerHTML = `${weight} N`;
         
     }   
    
   
}

function getPlanet(event) {
    let planet = event.target.value;
    image.setAttribute('src', `./ProjectImage/${planet}.png`);
    // } else {
    //     error.style.display = 'none';
    //     displayPlanet.style.display = 'flex';
    //     image.setAttribute('src', `./ProjectImage/${planet}.png`);
    // }
        
}