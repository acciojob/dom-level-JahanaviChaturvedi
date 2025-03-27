function getDOMLevel(element) {
    let level = 0;
    let currentElement = element;

    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement; // Move to the parent element
    }

    return level;
}

const targetElement = document.getElementById('level');

const domLevel = getDOMLevel(targetElement);
alert