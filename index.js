//Global Variables
const artCards = document.querySelector('#card-container');
const savedCards = document.querySelector('.saved-cards');
const chromImg = document.querySelector('.chrom_img');
//let img = document.getElementsByTagName('img');
const submitBtn = document.querySelector('.btn');
const form = document.querySelector('#crit');
const log = document.querySelector('#submitted');
//Events
window.addEventListener('DOMContentLoaded', getArtworks());
form.addEventListener('submit', logSubmit);

//Fetch from DB
function getArtworks () {
   fetch("http://localhost:3000/artworks")
    .then(res => res.json())
    .then ( artworks => {
    artworks.forEach(piece => {
renderCard(piece);

    })
});
}
//make Cards
function renderCard(piece) {

    let makeDiv = document.createElement('div');
        makeDiv.setAttribute('id', 'card');
        makeDiv.setAttribute('draggable','true');
        makeDiv.setAttribute('ondragstart','drag(event)');
      
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
function logSubmit(event) {
    log.textContent = `Thanks! Your critique has been submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();;
}
//window.onclick = function(event) {
  //  if (!event.target.innerText.matches('The Singer in Green')) {
   //  let newImg = document.createElement('img');
    // newImg.setAttribute('src', 'images/chromata-dancer.png') 
    // chromImg.append()
     //   }
   // else if (!event.target.a.innerText.matches('Dancers, Pink and Green')){}
    
    //else if (!event.target.a.innerText.matches('Jalais Hill, Pontoise')){}

    //else if (!event.target.a.innerText.matches('Head of a Young Woman')){}

    //else if (!event.target.a.innerText.matches('A Reconnaissance')){}

  //}

  //function submitCritique () {

//x  }




    