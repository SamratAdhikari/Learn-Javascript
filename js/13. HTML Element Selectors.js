/*
Element Selectors:
1. Single Element Selector
2. Multi Element Selector
*/


// Single Element Selectors
// let element = document.getElementById("first");
// // element = element.className
// // element = element.childNodes
// // element = element.parentNode
// // element.style.color = "red";
// // element.innerText = "Samrat is a good boy"
// element.innerHTML = "<b>Hello World</b>"

// console.log(element);


// let sel = document.querySelector("first");
// sel = document.querySelector(".child")
// sel = document.querySelector("div")
// sel.style.color = "green"
// console.log(sel)

// Multiple Element Selector
// let elems = document.getElementsByClassName("class")
// elems = document.getElementsByClassName("container")
// // console.log(elems[0].getElementsByClassName("child"))

let elems = document.getElementsByTagName("div")
// console.log(elems)

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element)
    
}




Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = "blue";
    
});






















