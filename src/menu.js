

// plan isto create two main containers here. One will be much
// bigger and contain the scrollable menu. The other will be
// a smaller box that lists the Hours of the restaurant
const menuContainer = document.createElement('div');


export const menuPage = function () {
    menuContainer.classList.add('menu-container');
    console.log('menu page linked');
};

export {menuContainer};