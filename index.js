const artCards = document.querySelector('.card-container');
const savedCards = document.querySelector('saved-cards');
let img = document.getElementsByTagName('img');
//on page load, get Title and Artist from DB and put them in cards:


window.addEventListener('DOMContentLoaded', getArtworks());
//img.addEventListener('click', moveImage());

//get function for getting images from db.json
//function for rending images to a car
function getArtworks () {
   fetch("http://localhost:3000/artworks")
    .then(res => res.json())
    .then ( artworks => {
    artworks.forEach(piece => {
        //function for rendering each artwork card
renderCard(piece);

    })
});
}

//function to make each card
function renderCard(piece) {

    let makeDiv = document.createElement('div');
        makeDiv.setAttribute('class', 'card');
      

    let newContainer = document.createElement('div');
        newContainer.setAttribute('class','container');

    let h4 = document.createElement('h4');
        h4.innerText = `Title: ${piece.title}`;

    let p = document.createElement('p');
        p.innerText = `Artist: ${piece.artist}`

   
    newContainer.append(h4, p, );
    makeDiv.append(newContainer);
    artCards.append(makeDiv);
    
}
//function moveImage (event) {
  //  let address = event.target.src;
   // let img = document.createElement('img');
   // img.setAttribute(src, address)

    //let btn = document.createElement('button');
    //btn.setAttribute('class', "generate");

    //savedCards.append(img, btn);
//}



    