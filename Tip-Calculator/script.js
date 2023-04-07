const billAmount = document.getElementById('bill');
const service = document.getElementById('service');
const people = document.getElementById('people');
const tipAmount = document.getElementById('tipAmount');
const calculateBtn = document.getElementById('calculateBtn');

init();

function init(){
    calculateBtn.addEventListener('click', calculate);
}

// console.log(typeof(billAmount.value))
function calculate() {
    let total = (Number(billAmount.value) * Number(service.value/100)) / Number(people.value);
    tipAmount.innerHTML = `$ ${total.toFixed(2)}`;

    
    
}