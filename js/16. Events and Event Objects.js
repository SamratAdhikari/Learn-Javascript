console.log("Events and Event Objects")

document.getElementById("heading").addEventListener("click", function (e) {
    let vari;

    console.log("you have clicked the heading");


    vari = e.target;
    vari = e.target.className;
    vari = e.target.id;
    Array.from(e.target.classList).forEach(function (element){
        console.log(element);
        });

    vari = e.offsetX;
    vari = e.offsetY;

    vari = e.clientX;
    vari = e.clientY;


    console.log(vari);
    // location.href = "https://google.com" 
});



document.getElementById("heading").addEventListener("mouseover", function(e){
    let mouse;
    mouse = e.clientX;
    console.log(mouse);

});




























