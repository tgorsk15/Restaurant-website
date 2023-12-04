 // have three divs on a grid template
// Div 1 will contain a callout for a special live 
// performance that happens every Friday

// Div 2 will contain the name of of restaurant and logo
//  - will have a small block of text wiht a short description

// Div 3 will contain an img, something Wizarding-world-esque

const homeContainer = document.createElement('div');

export const homePage = function () {
    // need to start with an outer container .. this outer
    // container will become the child container of the
    // content div, thus making it visible on the page
    // const body = document.body;

    
    // this won't be appended to the the "content" div until it is
    // called upon in the index.js file

    homeContainer.classList.add('home-container');
    homeContainer.textContent = 'Is this working?'
    // body.appendChild(homeContainer);

    console.log('homepage is linked');

    return homeContainer

}

export {homeContainer};



