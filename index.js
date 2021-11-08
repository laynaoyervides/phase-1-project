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
    log.textContent = `Thanks! Your critique has been submitted! Proceed to the next section!`;
    event.preventDefault();;
}
window.onclick = function(event) {
    console.log(event.target.innerText);
   
   if (event.target.innerText === 'The Singer in Green') {
    let newImg = document.createElement('img');
    newImg.setAttribute('class', 'gen_img')
     newImg.setAttribute('src', 'images/chromata-dancer.png') 
     let original = document.createElement('img');
     original.setAttribute('class', 'orig');
     original.setAttribute('src', 'images/DT1045.jpeg')
    chromImg.append(newImg, original);
       }
    else if (event.target.innerText===('Dancers, Pink and Green')){
        let newImg = document.createElement('img');
        newImg.setAttribute('class', 'gen_img')
        newImg.setAttribute('src', 'images/chromata dancers 1.png') 
        let original = document.createElement('img');
        original.setAttribute('class', 'orig');
        original.setAttribute('src', 'images/degas_green_dancers.jpeg')
       chromImg.append(newImg, original);
    }
    else if (event.target.innerText===('Jalais Hill, Pontoise')){ 
        let newImg = document.createElement('img');
        newImg.setAttribute('class', 'gen_img')
        newImg.setAttribute('src', 'images/chromata jalaise.png') 
        let original = document.createElement('img');
        original.setAttribute('class', 'orig');
        original.setAttribute('src', 'images/Pisssarro_green.jpeg')
       chromImg.append(newImg, original);
    }
    else if (event.target.innerText===('Head of a Young Woman')){
        let newImg = document.createElement('img');
        newImg.setAttribute('class', 'gen_img')
        newImg.setAttribute('src', 'images/chromata-durer.png') 
        let original = document.createElement('img');
        original.setAttribute('class', 'orig');
        original.setAttribute('src', 'images/Green_Durer.jpeg')
       chromImg.append(newImg, original);
    }
    else if (event.target.innerText===('A Reconnaissance')){
        let newImg = document.createElement('img');
        newImg.setAttribute('class', 'gen_img')
        newImg.setAttribute('src', 'images/chromata-capture (1).png') 
        let original = document.createElement('img');
        original.setAttribute('class', 'orig');
        original.setAttribute('src', 'images/recon.jpeg')
       chromImg.append(newImg, original);
    }
    else console.log('nope');
}






    