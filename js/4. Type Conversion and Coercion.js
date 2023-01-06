// Type Conversion and Coercion

console.log("Hello World");
let my_var;
my_var = 100;
console.log(my_var, (typeof my_var));

my_var = String(my_var);
console.log(my_var, (typeof my_var));

let bool = String(true);
console.log(bool, (typeof bool));

let date = new Date();
console.log(date, (typeof date));

let arr = [1,2,3,4,5]
console.log(arr.length, (typeof arr))

arr = String(arr)
console.log(arr.length, (typeof arr))


let i = 8;
console.log(i.toString())

let stri = "7898";
console.log(stri, (typeof stri))
stri = Number(stri)
console.log(stri, (typeof stri))

let num = parseInt("1215.5456")
float = parseFloat("2312.5121")
console.log(num, (typeof num))
console.log(float, (typeof float))


console.log(float.toFixed(), (typeof num))
console.log(float.toFixed(2), (typeof num))
console.log(float.toFixed(10), (typeof num))














