let ageOne = document.getElementById('ageOne');
let ageTwo = document.getElementById('ageTwo');
let ageDiff = document.getElementById('ageDiff');

function calc() {
    // console.log('yup!');
    ageDiff.innerHTML = ageOne.value - ageTwo.value;
};

