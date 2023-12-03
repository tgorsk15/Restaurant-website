import './styles.css';


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
    navigationBar.textContent = 'Here I am';
    navigationBar.classList.add('navigation-bar');

    document.body.appendChild(navigationBar);
    body.insertBefore(navigationBar, pageHolder);

})();

// siteNavigator()




// add addEventListeners to tab links at the top of page, so that when they
//are clicked, the correct page is loaded in through the "content" div.

// 

