let topLeft = document.querySelector('input[name=top-left]');
let topRight = document.querySelector('input[name=top-right]');
let bottomLeft = document.querySelector('input[name=bottom-left]');
let bottomRight = document.querySelector('input[name=bottom-right]');
let box = document.querySelector('.box-border');
let valueBox = document.querySelector('section .value-borda');

topLeft.onchange = function() {
  let value = `${topLeft.value}px`;
  box.style.borderTopLeftRadius = value; 
  borderRadius();
}

topRight.onchange = function() {
  let value = `${topRight.value}px`;
  box.style.borderTopRightRadius = value; 
  borderRadius();
}

bottomLeft.onchange = function() {
  let value = `${bottomLeft.value}px`;
  box.style.borderBottomLeftRadius = value; 
  borderRadius();
}

bottomRight.onchange = function() {
  let value = `${bottomRight.value}px`;
  box.style.borderBottomRightRadius = value; 
  borderRadius();
}

function borderRadius() {
  let p = document.querySelector('.value-borda p');
  let conteudo = document.createTextNode(`border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`);
  p.innerHTML = '';
  p.appendChild(conteudo);
}