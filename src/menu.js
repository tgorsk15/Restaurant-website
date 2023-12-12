
import cakes from './imgs/Cauldron-Cakes.jpg';
import snake from './imgs/snake-filet.jpg';
import beans from './imgs/beans.jpg';
import pie from './imgs/shepherd.jpg';
import beer from './imgs/Butter-beer.jpg';

// plan isto create two main containers here. One will be much
// bigger and contain the scrollable menu. The other will be
// a smaller box that lists the Hours of the restaurant
const menuContainer = document.createElement('div');


export const menuPage = function () {
    menuContainer.classList.add('menu-container');
    console.log('menu page linked');

   

    const menuImages = [cakes, snake, beans, pie, beer];

    // where card memory will be stored once the for loop is finished
    const menuCardTexts = [];

    const menuObjects = [];


    //create 2main containers for the page
    const menu1 = document.createElement('div')
    menuFactory.addToMenu(menu1, 'menu1', menuContainer);

    const menu2 = document.createElement('div')
    menuFactory.addToMenu(menu2, 'menu2', menuContainer);

    const menu2Title = document.createElement('h1');
    menuFactory.addToMenu(menu2Title, 'menu2-title', menu2);
    menu2Title.textContent = 'Hours';

    const menu2Container = document.createElement('div');
    menuFactory.addToMenu(menu2Container, 'menu2-container', menu2);

    for (let i = 0; i < 6; i++) {
        const menu2Hour = document.createElement('div')
        menuFactory.addToMenu(menu2Hour, 'menu2-hour', menu2Container);

        if (i === 0) {
            menu2Hour.textContent = 'Monday: 2:00 - 9:00pm'
        } else if (i === 1) {
            menu2Hour.textContent = 'Tuesday: 12:00 - 9:00pm'
        } else if (i === 2) {
            menu2Hour.textContent = 'Wednesday: 12:00 - 9:00pm'
        } else if (i === 3) {
            menu2Hour.textContent = 'Thursday: 12:00 - 9:00pm'
        } else if (i === 4) {
            menu2Hour.textContent = 'Friday: 12:00pm - 12:00am'
        } else if (i === 5) {
            menu2Hour.textContent = 'Saturday: 12:00pm - 12:00am'
        } else if (i === 6) {
            menu2Hour.textContent = 'Sunday: 12:00pm - 6:00pm'
        }
    };


    //title creation
    const menuTitle = document.createElement('h1');
    menuFactory.addToMenu(menuTitle, 'menu-title', menuContainer);
    menuTitle.textContent = 'Take a Gander... ';


    // menu items: will iterate through an array to create a 
    // number of menu Items ... images will be inserted based on what
    // the image array contains
    for (let i = 0; i < menuImages.length; i++) {
        const menuCard = document.createElement('div');
        menuFactory.addToMenu(menuCard, 'menu-card', menu1);

        // create menuImage
        const menuImage = new Image();
        menuImage.src = menuImages[i];
        menuFactory.addToMenu(menuImage, 'menu-image', menuCard);

        // create menuItemText div
        const menuItemText = document.createElement('div')
        menuFactory.addToMenu(menuItemText, 'menu-item-txt', menuCard);

        // push to array so it can individually style later
        menuCardTexts.push(menuItemText);
    };


    for (let i = 0; i < menuCardTexts.length; i++) {
        const menuItemTitle = document.createElement('h1');
        menuFactory.addToMenu(menuItemTitle, 'menu-item-title', menuCardTexts[i]);

        const menuItemWords = document.createElement('p');
        menuFactory.addToMenu(menuItemWords, 'menu-item-words', menuCardTexts[i]);

        const menuObject = {
            foodTitle: '',
            description: ''
        };

        if (i === 0) {
             // assign values to the titles and texts
            menuObject.foodTitle = `Carl's Cauldron Cakes` + `   ` + `$17.99`;
            menuObject.description = `These famous cakes will make your wand tingle
            with their swarmy and cream-of-toad filling surronded by a warm crust of 
            bread crumbs and figgleroot.`;

        } else if (i === 1) {
            menuObject.foodTitle = `Fenny Snake Filet` + `   ` + `$39.00`;
            menuObject.description = `We acquire our Fennies amongst the highest 
            peaks of the Highlands near Hogwarts, making this steak absolutley top
            of the line`;

        } else if (i === 2) {
            menuObject.foodTitle = `Bertie Bott's Every Flavor Beans` + `   ` + `$7.99`;
            menuObject.description = `A classic that Wizards and Witches have enjoyed all
            over the world for decades. Pick a bean at your own risk and hope you're not
            confusing Black Licorice with Ash!!`;
        } else if (i === 3) {
            menuObject.foodTitle = `Shepherd's Pie` + `   ` + `$15.99`;
            menuObject.description = `Bertie's homemade Shepherd's Pie was selected in 2020
            as one of the Wizarding World's most "hidden and underated pies" by the well known
            critic Stanly Skimweed. Come and see for yourself!`;
        } else if (i === 4) {
            menuObject.foodTitle = `ButterBeer     $4.99`;
            menuObject.description = `If you're feeling a little knackered from all that
            spell casting and then some, an ice cold, gurgling, and creamy ButterBeer
            is the way to go!`;
        };

        menuItemTitle.textContent = menuObject.foodTitle;
        menuItemWords.textContent = menuObject.description;
        console.log( menuItemTitle);
    }



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