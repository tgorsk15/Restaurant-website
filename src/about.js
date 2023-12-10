

const aboutContainer = document.createElement('div');



export const aboutPage = function () {
    aboutContainer.classList.add('about-container');
    console.log('About page inserted');

    // main container for the rest of the elements on the about page
    const about1 = document.createElement('div');
    aboutFactory.addToAbout(about1, 'about1', aboutContainer);
    console.log(about1);

    // container that contains the title and paragraph
    const about1Top = document.createElement('div');
    aboutFactory.addToAbout(about1Top, 'about1-top', about1);


    const aboutTitle = document.createElement('div')
    aboutFactory.addToAbout(aboutTitle, 'about-title', about1Top);
    aboutTitle.textContent = 'A story Long in the Making'

    const aboutParagraph = document.createElement('div')
    aboutFactory.addToAbout(aboutParagraph, 'about-para', about1Top)
    aboutParagraph.textContent = `Growing up in a small muggle town off the coast just shy
    of Weymouth, Bertie Botts was always one of the peculiar sort. With not much
    to do around his home, he would create fantastical concotions using all sorts
    of things, not excluding seaweed, seagull feathers, house detergents, and lamb mucus.
    Once he discovered the world of wizadry and attending Hogwarts, he quickly
    rose through the ranks to become Hufflepuff's head chef. 30 years later, Bertie
    is still using his creativenss and passion to run his own restaurant and candy shop, 
    'Bertie's Bott's, one of the most popular and extravagent brands in the Wizarding World`


    const aboutPic = new Image();
}


// elementName  = reference name
// element = type of HTML element we want to create
// className = name of class we want to assign
// fatherElement = name of container we want to append to
const aboutFactory = (function () {

    function addToAbout(elementName, className, fatherElement ) {
        elementName.classList.add(className);
        fatherElement.appendChild(elementName);

        console.log(elementName);
        return elementName;
    };
    return {addToAbout};
})();



export {aboutContainer};
