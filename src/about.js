

const aboutContainer = document.createElement('div');


export const aboutPage = function () {
    aboutContainer.classList.add('about-container');
    console.log('About page inserted');
    // const test = document.createElement('div');
    aboutFactory.addToAbout(test, 'div', 'test-div', aboutContainer);
    console.log(test);
}



// elementName  = reference name
// element = type of HTML element we want to create
// className = name of class we want to assign
// fatherElement = name of container we want to append to
const aboutFactory = function () {

    function addToAbout(elementName, element, className, fatherElement ) {
        elementName = document.createElement(element);
        elementName.classList.add(className);
        fatherElement.appendChild(elementName);

        console.log(elementName);
        return elementName;
    };
    return {addToAbout};
};


export {aboutContainer};
