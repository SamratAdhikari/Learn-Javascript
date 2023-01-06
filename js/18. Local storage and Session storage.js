
// LOCAL STORAGE


// Add a key value inside local Storage
localStorage.setItem("name1", "samrat");
localStorage.setItem("name2", "naruto");

// retrieve an item from the local storage
// let name = localStorage.getItem("name2");
// name = localStorage.getItem("name10");

// console.log(name);

// clears the entire local storage
// localStorage.clear(); 

// clear a particular item from the local storage
localStorage.removeItem("name2");

// Note: cant add arrays easily
// converts the array into strings
let arr = ["veg", "chicken", "buff", "beef", "pork"];
localStorage.setItem("foods", JSON.stringify(arr));


localStorage.getItem("foods");


let name = localStorage.getItem("foods");
name = JSON.parse(name);
console.log(name);
console.log("Working");


// console codes
/*
window.localStorage;
window.localStorage.name1;
typeof window.localStorage.name1;
*/





// SESSION STORAGE
// everything is same but the code is sessionStorage

sessionStorage.setItem("name", "samrat")
sessionStorage.clear();













