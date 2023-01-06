console.log("Determination");

// let cont = document.querySelector(".no");
// cont = document.querySelector(".container");
// console.log(cont.childNodes);
// console.log(cont.children);

// // let nodeName = cont.childNodes[1].nodeName;
// let nodeType = cont.childNodes[1].nodeType;
/* Node Types
1 - element
2 - attribute
3 - text
8 - comment
9 - document
10 - DOCTYPE
*/
// console.log(nodeType);

let container = document.querySelector("div.container");
// console.log(container.children[5].children);
console.log(container.firstChild);
console.log(container.lastChild);
console.log(container.firstElementChild);
console.log(container.lastElementChild);
console.log("No of elements:", container.childElementCount);

console.log(container.firstElementChild.parentNode.nodeName)
console.log(container.firstElementChild.nextSibling.nodeName)
console.log(container.firstElementChild.nextElementSibling)

















