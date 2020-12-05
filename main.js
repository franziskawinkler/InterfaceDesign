document.addEventListener('DOMContentLoaded', init);
const animals = ['Hund', 'Vogel', 'Insekt'];
function init() {
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            toggleAnimal('Hund');
        }
        if (event.code === 'ArrowUp') {
            toggleAnimal('Vogel');
        }
        if (event.code === 'ArrowLeft') {
            toggleAnimal('Insekt');
        }
    })
}
function toggleAnimal(animal) {
    var animalElement = document.getElementById(animal);
    if (animalElement.classList.contains('invisible')) {
        showAnimal(animalElement);
    } else {
        hideAnimal(animalElement);
    }
}

function showAnimal(animalElement) {
    var animalsShown = [];
    animals.forEach(function(animal) {

        var animalsElement = document.getElementById(animal);
        if (!animalsElement.classList.contains('invisible')) {
            animalsShown.push(animal)
        }
    });

    if (animalsShown.length > 0) {
        showError(animalsShown);
        return;
    }
    var Mensch = document.getElementById("Mensch");
    Mensch.classList.toggle("invisible");
    animalElement.classList.toggle("invisible");
}

function showError(animalsShown) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.textContent = 'Es befinden sich zu viele Tiere auf dem Interaktionspunkt! ';

    animalsShown.forEach(function(animal) {
        errorMessage.textContent += animal + ' wird immernoch angezeigt. Stelle die Figur nochmal auf den Interaktionspunkt, sodass du die Perspektive wechseln kannst.';
    });
}

function hideAnimal(animalElement) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.textContent = '';

    var Mensch = document.getElementById("Mensch");
    Mensch.classList.toggle("invisible");
    animalElement.classList.toggle("invisible");
}