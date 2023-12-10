

// plan isto create two main containers here. One will be much
// bigger and contain the scrollable menu. The other will be
// a smaller box that lists the Hours of the restaurant
const menuContainer = document.createElement('div');


export const menuPage = function () {
    menuContainer.classList.add('menu-container');
    console.log('menu page linked');

    //create 2main containers for the page
    const menu1 = document.createElement('div')
    menuFactory.addToMenu(menu1, 'menu1', menuContainer);

    const menu2 = document.createElement('div')
    menuFactory.addToMenu(menu2, 'menu2', menuContainer);

};


const menuFactory = (function () {

    function addToMenu(elementName, className, fatherElement ) {
        elementName.classList.add(className);
        fatherElement.appendChild(elementName);

        console.log(elementName);
        return elementName;
    };
    return {addToMenu};
})();


export {menuContainer};