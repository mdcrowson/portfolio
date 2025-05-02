//------------------------//
//  Filter cards by type  //
//------------------------//

// Variables

const allButton = document.getElementById('all-button');
const designButton = document.getElementById('design-button');
const webButton = document.getElementById('web-button');

const filterButtonGroup = document.getElementById('filter-button-group');

const webCards = document.querySelectorAll('.web-card');
const designCards = document.querySelectorAll('.design-card');
const projectCardsWrapper = document.getElementById('project-cards');
const allCardsArray = Array.from(projectCardsWrapper.children);

// Event listener

filterButtonGroup.addEventListener('click', (event) => {
    let targetID = event.target.id;
    if(targetID === 'design-button') {
        designButton.classList.add('active');
        allButton.classList.remove('active');
        webButton.classList.remove('active');

        allCardsArray.forEach((card) => {
            if(!card.classList.contains('design-card') ) {
                card.classList.add('d-none');
            } else {
                card.classList.remove('d-none');
            }
        });

    } if(targetID === 'web-button') {
        webButton.classList.add('active');
        allButton.classList.remove('active');
        designButton.classList.remove('active');

        allCardsArray.forEach((card) => {
            if(!card.classList.contains('web-card') ) {
                card.classList.add('d-none');
            } else {
                card.classList.remove('d-none');
            }
        });
        
    } if(targetID === 'all-button') {
        allButton.classList.add('active');
        designButton.classList.remove('active');
        webButton.classList.remove('active');

        allCardsArray.forEach((card) => {
                card.classList.remove('d-none');
        });
        
    }
});


