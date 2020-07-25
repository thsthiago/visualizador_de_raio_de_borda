let topLeft = document.querySelector('input[name=top-left]');
let topRight = document.querySelector('input[name=top-right]');
let bottomLeft = document.querySelector('input[name=bottom-left]');
let bottomRight = document.querySelector('input[name=bottom-right]');
let box = document.querySelector('.box-border');

topLeft.onchange = function() {
  let value = `${topLeft.value}px`;
  box.style.borderTopLeftRadius = value; 
}

topRight.onchange = function() {
  let value = `${topRight.value}px`;
  box.style.borderTopRightRadius = value; 
}

bottomLeft.onchange = function() {
  let value = `${bottomLeft.value}px`;
  box.style.borderBottomLeftRadius = value; 
}

bottomRight.onchange = function() {
  let value = `${bottomRight.value}px`;
  box.style.borderBottomRightRadius = value; 
}