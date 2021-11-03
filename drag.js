const savedCards = document.querySelector('.saved-cards');

function makeDraggable (img) {
    
    let img = document.getElementsByTagName('img');
    img.setAttribute('draggable', 'true');
    img.setAttribute('ondragstart', 'drag(event)');
    savedCards.setAttribute('ondrop', 'drop(event)')
    savedCards.setAttribute('ondragover', "allowDrop(event)")

}
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



makeDraggable();