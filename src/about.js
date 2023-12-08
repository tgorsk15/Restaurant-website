

const aboutContainer = document.createElement('div');


export const aboutPage = function () {
    aboutContainer.classList.add('about-container')

    const test = addToAbout(test, 'div', 'special', aboutContainer);

}



// elementName  = reference name
// element = type of HTML element we want to create
// className = name of class we want to assign
// fatherElement = name of container we want to append to
function addToAbout(elementName, element, className, fatherElement ) {
    elementName = document.createElement(element);
    elementName.classList.add(className);
    fatherElement.appendChild(elementName);

    console.log(elementName);
    return elementName;
}
