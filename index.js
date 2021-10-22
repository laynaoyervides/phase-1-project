//variables
//get function for getting images from db.json
//function for rending images to a car
function getArtworks () {
    return fetch("localhost:3000/artworks")
    .then(res => res.json())
}
//function for rendering each artwork card
getArtworks.then () artworks => {
    artworks.forEach(piece => {
        renderCard(piece);
    });
}
//function to make each card
function renderCard(piece) {
    
}