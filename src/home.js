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
    const homeDivNames = ['home1', 'home2', 'home3'];
    
    // this won't be appended to the the "content" div until it is
    // called upon in the index.js file

    homeContainer.classList.add('home-container');
    // homeContainer.textContent = 'Is this working?'
    // body.appendChild(homeContainer);

    // create 3 div containers within the homeContainer
    for (let i = 0; i < 3; i++) {
        const homeDiv = document.createElement('div');
        homeDiv.classList.add(homeDivNames[i]);
        homeContainer.appendChild(homeDiv);      
    }

    console.log('homepage is linked');

    // return homeContainer

}

export {homeContainer};



