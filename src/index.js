import './styles.css';
import './home.js';
import { homePage, homeContainer } from './home.js';


console.log('test')

// object/factory function that will connect all of the webiste pages
// together. Here is where the main functionality will be, where
// the correct page will render and be visible based on what tabs
// the user clicks at the top


// create the main website bar at the top
const siteNavigator = (function () {

    const body = document.body;
    const pageHolder = document.getElementById('content');
    console.log(pageHolder);

    // create the main website bar at the top
    const navigationBar = document.createElement('div');
    navigationBar.textContent = 'Bertie Bott\'s';
    navigationBar.classList.add('navigation-bar');

    // adds the navigation bar to the top
    pageHolder.appendChild(navigationBar);
    // body.insertBefore(navigationBar, pageHolder);


    // array containing the tab names
    const tabNames = ['Home', 'About', 'Menu', 'Reservations']
    const tabs = [];

    for (let i = 0; i < 4; i++) {
        const tab = document.createElement('div');
        tab.classList.add('navigation-tab');
        tab.textContent = tabNames[i];
        tabs.push(tab);
        navigationBar.appendChild(tab);
    }

    let activeTab = tabs[0];
    console.log(activeTab);

    // const tabs = document.querySelectorAll('navigation-tab')
    console.log(tabs)
    tabs.forEach(tab => {
         tab.addEventListener('click', (e) => {
            console.log(tab);
            activeTab = tab;
            console.log(activeTab);
            switchPage(activeTab);
    
        });
   
    });
    // homePage();
    // pageHolder.appendChild(homeContainer)

    function switchPage(activeTab) {
        if (activeTab === tabs[0]) {
            console.log('homepage');
            homePage();
            pageHolder.appendChild(homeContainer);
            
        } else if (activeTab === tabs[1]) {
            console.log('About');
        } else {
            console.log('doesnt exist')
        }

    }


})();




// add addEventListeners to tab links at the top of page, so that when they
//are clicked, the correct page is loaded in through the "content" div.

// when one page is selected, the others should be set to
// 'display: none'

