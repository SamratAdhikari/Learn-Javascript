console.log("hello")



let x = 5; 
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;

// Exploring the math object
z = Math;
z = Math.PI;
z = Math.E;

z = Math.round(5.6);
z = Math.ceil(5.1);
z = Math.floor(5.9);
z = Math.abs(-5);
z = Math.sqrt(25);
z = Math.pow(5, 5);
z = Math.min(2, 5, -1, 56, 12);
z = Math.max(2, 5, -1, 56, 12);

// generate random number
z = Math.random();
// for specific range;
// a = (0, 10)
// a100 = a*100 = (0, 100)
// a10_100 = 10+a*(100-10) = (10, 100)
z = 100*Math.random();
z = Math.ceil(50 + (100-50)*Math.random());



console.log(z);