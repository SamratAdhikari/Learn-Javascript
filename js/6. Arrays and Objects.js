console.log("Arrays and Objects");

let marks = [90, 54, 21 , 54 ,12, 85];
const fruits = ["orange", "Apple", "Banana"];
const mixed = ["string", 5646, ["str2", "2312"]];

const arr = new Array(23, 123, "samrat")

console.log(marks)
console.log(fruits)
console.log(mixed)

console.log(arr)


// 
console.log(marks[0])
console.log(fruits[21])
console.log(mixed[2][0])

console.log(arr.length)

console.log(Array.isArray("sadasdas"))
arr[0] = "23.23"
console.log(arr)


let value = marks.indexOf(54)
console.log(value)


// Mutating or Modifying arrays
marks.push(35465);
marks.unshift(9999);
console.log(marks)
marks.pop()
console.log(marks)
marks.shift()
console.log(marks)
marks.splice(1, 3)
console.log(marks)
marks.reverse()
console.log(marks)


let marks2 = [1, 2, 3, 4, 5]
marks = marks.concat(marks)
console.log(marks);


let myObj = {
    name: "samrat",
    ciy: "pokhara",
    isActive: true,
    marks: [1, 2, 3, 4, 5]
}

console.log(myObj)
console.log(myObj.isActive)
console.log(myObj["name"])
console.log(myObj.name)































