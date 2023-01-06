
// create element
let div_ele = document.createElement("div");

// add text to the local storage
let val = localStorage.getItem("text");
let text;
if (val == null) {
    text = document.createTextNode("This is my created Element. Click to Edit")
}
else {
    text = document.createTextNode(val);
}


// let text = document.createTextNode("This is my created Element. Click to Edit");

// add text to created element
div_ele.appendChild(text)

// give element id, style and class
div_ele.setAttribute("id", "ele");
div_ele.setAttribute("class", "ele");
div_ele.setAttribute("style", "border: 2px solid black; width: 154px; margin: 34px; padding: 23px");

// grab the main container
let container = document.querySelector(".container");
let first = document.getElementById("first");

// insert the elements before the element with id "first"
container.insertBefore(div_ele, first);


console.log(div_ele, container, first)

// add event listener to the div_ele
div_ele.addEventListener("click", click)


function click() {
    let noTextArea = document.getElementsByClassName("textarea").length;
    if (noTextArea == 0) {
        let html = ele.innerHTML;

        div_ele.innerHTML = `<textarea class="textarea" id="textarea" rows="3">${html}</textarea>`
    }

    // listen for the blur event for textarea
    let textarea = document.getElementById("textarea");
    textarea.addEventListener("blur", blur)
    
    function blur() {
        ele.innerHTML = textarea.value;
        localStorage.setItem("text", textarea.value);
    
    }
}



























console.log("working")