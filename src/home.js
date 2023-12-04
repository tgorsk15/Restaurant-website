 // have three divs on a grid template
// Div 1 will contain a callout for a special live 
// performance that happens every Friday

// Div 2 will contain the name of of restaurant and logo
//  - will have a small block of text wiht a short description

// Div 3 will contain an img, something Wizarding-world-esque
import frog from './imgs/TheFrogChoirHM.png'


const homeContainer = document.createElement('div');

export const homePage = function () {
    // need to start with an outer container .. this outer
    // container will become the child container of the
    // content div, thus making it visible on the page

    // const body = document.body;
    const homeDivNames = ['home1', 'home2', 'home3'];
    let homeDivs = [];
    
    // this won't be appended to the the "content" div until it is
    // called upon in the index.js file

    homeContainer.classList.add('home-container');
    // body.appendChild(homeContainer);

    // create 3 div containers within the homeContainer
    for (let i = 0; i < 3; i++) {
        const homeDiv = document.createElement('div');
        homeDiv.classList.add(homeDivNames[i]);
        homeContainer.appendChild(homeDiv);
        homeDivs.push(homeDiv);
    };
    let home1 = homeDivs[0];
    let home2 = homeDivs[1];
    let home3 = homeDivs[2];


    // style each homeDiv accordingly
    // home1:
    styleHome1(home1);
    styleHome2(home2);
    styleHome3(home3);


    console.log('homepage is linked');

    // return homeContainer

}

function styleHome1(home1) {
    const frogIcon = new Image();
    frogIcon.src = frog;
    frogIcon.classList.add('frog-icon')
    home1.appendChild(frogIcon);
}

function styleHome2 (home2) {

}

function styleHome3 (home3) {

}

export {homeContainer};



