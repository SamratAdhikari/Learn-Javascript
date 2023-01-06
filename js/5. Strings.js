// Strings: Properties, Methods and Templates Literals

console.log("Hello World")
const name = "Samrat"
const greeting = "Good Morning"
console.log(greeting, name)

let lines;
lines = "1st line \n 2nd line \t\t 3rd line"
console.log(lines)

let html;
html = "<h1>This is a heading.</h>" +
    "<p>This is a paragraph</p>"
html = html.concat("THIS ", "String")

console.log(html)
console.log(html.length)
console.log(html.toLowerCase())
console.log(html.toUpperCase())


console.log(html[1])
console.log(html.indexOf("heading"))
console.log(html.indexOf("samrat"))
console.log(html.indexOf("<"))
console.log(html.lastIndexOf("<"))
console.log(html.charAt(12))


console.log(html.endsWith("String"))
console.log(html.endsWith("g"))
console.log(html.endsWith("I"))
console.log(html.includes("is"))
console.log(html.includes("z"))


console.log(html.substring(0, 12)) //Not including 12th char
console.log(html.substring(5, 18))
console.log(html.substring(-4))
console.log(html.slice(-4))
console.log(html.slice(0, 4))
console.log(html.slice(0, 15))
// .slice ~~ .substring except for -ve numbers
console.log(html.split(""))


console.log(html.replace("is", "are"))
console.log(html.replace(" is", " are"))



// Template Literals
let fruit1 = 'Apple\'';
let fruit2 = "Orange";
let myHtml = `Hello ${name}
            <h1> This is Heading</h1>
            <p>You like ${fruit1} and ${fruit2}</p>
            `;

document.body.innerHTML = myHtml;




















