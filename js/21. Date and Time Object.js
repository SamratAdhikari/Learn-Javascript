// Google: Mozilla Date


 let today = new Date();
//  console.log(today);
// console.log(typeof today);

let other_date = new Date("8-4-2007 5:36:23");
other_date = new Date("June 23 1999");
other_date = new Date("06/14/2001 8:15:35");
console.log(other_date)

let a;
a = other_date.getDay();
a = other_date.getHours();
a = other_date.getMinutes();
a = other_date.getSeconds();
a = other_date.getTime();
a = other_date.getMilliseconds();
a = other_date.getMonth();
console.log(a);

other_date.setDate(23);
other_date.setMonth(2);
other_date.setFullYear(9999);
other_date.setMinutes(52);
other_date.setSeconds(36);
other_date.setHours(12);

console.log(other_date)




