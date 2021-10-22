//variables used to find elements from the DOM
var artCards = document.querySelector('.card-container');
console.log(artCards);
var savedCards = document.querySelector('saved-cards');

//on page load, reset the saved images
//on page load, get artworks and put them in cards:
window.addEventListener('DOMContentLoaded', getArtworks())
//when clicked, save a card to a different container and add a button. 
//makeDiv.addEventListener('click', copyCard())

//get function for getting images from db.json
//function for rending images to a car
function getArtworks () {
    return fetch("http://localhost:3000/artworks")
    .then(res => res.json());
}
//function for rendering each artwork card
getArtworks().then ( artworks => {
    artworks.forEach(piece => {
        renderCard(piece);
    })
});

//function to make each card
function renderCard(piece) {

    let makeDiv = document.createElement('div');
    makeDiv.setAttribute('class', 'card');

    let img = document.createElement('img');
    img.setAttribute('src', piece.imgSrc)
    img.setAttribute('width', '15%');

    //img.addEventListener('click', add to the saved section callback function here )

    let newContainer = document.createElement('div');
    newContainer.setAttribute('class','container');

    let h4 = document.createElement('h4');
    h4.innerText = `Title: ${piece.title}`;

    let p = document.createElement('p');
    p.innerText = `Artist: ${piece.artist}`

    newContainer.append(h4, p);
    makeDiv.append(img, newContainer);
    artCards.append(makeDiv);
}
//the copy card callback function that will be triggered when the card is clicked in the first section

function copyCard (piece){
    let keepCard = document.createElement('div');
    keepCard.setAttribute('class', 'saved-card');
    
    let btn = document.createElement('btn');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'generate');

}