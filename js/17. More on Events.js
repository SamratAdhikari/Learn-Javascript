
let btn = document.getElementById("btn");
btn.addEventListener("click", func1);
btn.addEventListener("dblclick", func2);
btn.addEventListener("mousedown", func3);



function func1(e){
    // console.log("Thanks", e);
    e.preventDefault();
}

function func2(e){
    console.log("Double Clicked", e);
    e.preventDefault();
}

function func3(e){
    console.log("Mouse Down", e);
    e.preventDefault();
}

document.querySelector(".no").addEventListener("mouseenter", func4);
document.querySelector(".no").addEventListener("mouseleave", func5);

function func4(e){
    console.log("Mouse Entered", e);

}
function func5(e){
    console.log("Mouse Left", e);
    
}


document.querySelector("*").addEventListener("mousemove", func6);

function func6(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 153)`
    console.log("Mouse Moved", e)
}


















console.log("working well");