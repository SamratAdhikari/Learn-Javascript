console.log("Determination");


// Create a "li" element
let element = document.createElement("li");
let text = document.createTextNode("I am an alternative");
element.appendChild(text);


// Add a class name to the li element
element.className = "child_ul";
element.li = "created_id";
element.setAttribute("title", "mytitle");
element.innerText = "<b>Hello This is Created Text</b>";
element.innerHTML = "<b>Hello This is Created Text</b>";

let ul = document.querySelector("ul.this");
ul.appendChild(element);
console.log(ul);
console.log(element);

let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("This is node of elem2");
elem2.appendChild(tnode);


element.replaceWith(elem2);

let myid = document.getElementById("ul");
myid.replaceChild(element, document.getElementById("list1"));

myid.removeChild(document.getElementById("list2"));

let pr = elem2.getAttribute("id");
pr = elem2.hasAttribute("sadasdasd");
console.log(pr);


elem2.removeAttribute("id");
elem2.setAttribute("title", "created_title");





















