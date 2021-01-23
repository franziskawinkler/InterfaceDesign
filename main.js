document.addEventListener('DOMContentLoaded', init);
const animals = ['Hund', 'Vogel', 'Ameise'];
function init() {
    
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            toggleAnimal('Hund');
        }
        if (event.code === 'ArrowUp') {
            toggleAnimal('Vogel');
        }
        if (event.code === 'ArrowLeft') {
            toggleAnimal('Ameise');
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
    document.getElementById('audiofile').play();

    var errorMessage = document.getElementById("error-message");
    errorMessage.classList.remove("invisible");
    errorMessage.innerHTML = 'Es befinden sich zu viele Tiere auf dem Interaktionsplattform! <br>';

    animalsShown.forEach(function(animal) {
        errorMessage.innerHTML += animal + ' wird immernoch angezeigt.<br> Stelle die Figur nochmal auf den Interaktionspunkt, sodass du die Perspektive wechseln kannst.';
    });

}

    

function hideAnimal(animalElement) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = '';
    errorMessage.classList.add("invisible");

    var Mensch = document.getElementById("Mensch");
    Mensch.classList.toggle("invisible");
    animalElement.classList.toggle("invisible");
}