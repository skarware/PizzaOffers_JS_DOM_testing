const form = document.querySelector('form');
const input = document.getElementById('newPizzaName');

form.addEventListener("submit", ev => {
    ev.preventDefault();

    divMaker(input.value)
    input.value = ''
});

const divMaker = text => {
// Grab an element
    var el = document.getElementsByClassName('listPizza')[0];
    // Make a new div
    console.log(el)
    elChild = document.createElement('div');
    // Give the new div some content
    elChild.innerHTML = text;
    elChild.classList.add("pizzaBox")
    // Jug it into the parent element
    el.prepend(elChild);
}

