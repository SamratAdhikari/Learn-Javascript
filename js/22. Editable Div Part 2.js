console.log('Creating a Editable Div');

let divElement = document.createElement('div');
let container = document.querySelector('.container');
let first = document.getElementById('first');

let text = document.createTextNode('Click to edit it');
divElement.appendChild(text);
divElement.setAttribute('id', 'elem');
divElement.setAttribute('style', 'border: 2px solid red; width: 154px; margin: 30px; padding: 23px;');

// Insert elements before element with id first
container.insertBefore(divElement, first);

// divElement.appendChild(text);
console.log(divElement);
console.log(container);
console.log(first);