// Used yts.ag

// window.open("https://yts.mx/")

let str = "movie";
let links = document.links;

console.log(links);

let href;
Array.from(links).forEach(function(element){
    href = element.href;
    if (href.includes(str)){
        console.log(href);
    }
})