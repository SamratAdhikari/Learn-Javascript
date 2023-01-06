// Loops in JS
/*
For
While
Do While
*/

// For Loop
console.log("For Loop - 1")
for (let i=0; i<10;){
    console.log(i);
    i += 1;
}
console.log("")


console.log("For Loop - 2")
for (let a=5; a<10; a++){
    console.log(a)
}
console.log("")


// While Loop
console.log("While Loop")
let j = 0;
while (j<10){
    console.log(j);
    j += 1;
}
console.log("")

// Do While
console.log("Do Loop")
let k = 0;
do {
    if (k===5){
        k += 1;
        continue;
    }
    console.log(k+1);
    k += 1;
} while (k < 10);

console.clear()

let arr = [2, 5, 2, 3, 1, 4];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
})


let obj = {
    name: "samrat",
    age: 18,
    job: Comment,
    os: "Ubuntu"
}


for (let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}















































