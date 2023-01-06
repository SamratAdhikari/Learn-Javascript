console.log("Tut on Functions");


function greet(name, wish){
    console.log(`Hello ${name}. How are you? I am fine. And I hope you and your family are fine there by the blessings of almighty gods. Its been a while I havent got any telegrams from you. I have been feeling lonely. My bloody girlfriend left me previous summer. ${wish} for nothing !`);
    return 4;
}


let name1 = "Samrat";
let name2 = "Naruto";




let val = greet(name, "Thanks");
console.log(val);

console.clear()

const mygreet = function(name,wish = "Thanks"){
    let msg = `happy birthday ${name}. ${wish} you`;
    return msg;
}
greet(name1, "Thanks");
greet(name2, "Thanks");

let val1 = mygreet(name);
console.log(val1);

const myobj = {
    name: "Samrat",
    game: function(){
        return "gta";
    }
}
console.log(myobj.game())


console.clear()

arr = ["fruits", "vegetables", "drinks"];
arr.forEach(function(element, index, array){
    console.log(element, index, array)
    
});
console.clear()

// Global and Local Scope

/*
let/const has block level scope
var has function level scope - global
*/
{
    var i = 234;
    console.log(i);
}
console.log(i)

function ui(name){
    i = 9;
    console.log(i);
    return `This is ${name}`;

}
console.log(ui("samrat"), i);




























































