//Global Variables
const artCards = document.querySelector('#card-container');
const savedCards = document.querySelector('.saved-cards');
const chromImg = document.querySelector('.chrom_img');
const submitBtn = document.querySelector('.btn');
const finishBtn = document.querySelector('.btn2');
const form = document.querySelector('#crit');
const log = document.querySelector('#submitted');
const compare = document.querySelector('#compare');
const compared = document.querySelector('#compared');
const critEntry = document.querySelector('#critTxt');
const comparison = document.querySelector('#comparison'); 

//Events
    window.addEventListener('DOMContentLoaded', getArtworks());
    //Submit Critique
    form.addEventListener('submit', logSubmit);
    //Finish Comparison
    compare.addEventListener('submit', logCompare);

// 2 other events at end

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

    const makeDiv = document.createElement('div');
        makeDiv.setAttribute('id', 'card');
        makeDiv.setAttribute('draggable','true');
        makeDiv.setAttribute('ondragstart','drag(event)');
      
    const newContainer = document.createElement('div');
        newContainer.setAttribute('class','container');

    const h4 = document.createElement('h4');
        h4.innerText = `Title: ${piece.title}`;

    const p = document.createElement('p');
        p.innerText = `Artist: ${piece.artist}`

   
    newContainer.append(h4, p, );
    makeDiv.append(newContainer);
    artCards.append(makeDiv);
    
}

//event handlers
function logSubmit(event) {
    let critTxt = critEntry.value;
    log.innerHTML = `Thanks, your critique has been submitted! Here is what you wrote: ${critTxt}`; 
    event.preventDefault();
}
function logCompare (event) {
    let comparisonTxt = comparison.value;
    compared.innerHTML = `Thanks! Your comparison has been submitted. You're finished with this assignment. Here is what you wrote: ${comparisonTxt}`;
    event.preventDefault();
}
// show generative artwork and original from images file event
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

//Draggable Events
function allowDrop(ev) {
    ev.preventDefault();
    }

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    }

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    }





    