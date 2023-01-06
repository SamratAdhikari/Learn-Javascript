console.log("If Else Conditions & Switches");


const age = 18;
const vari = 34;
const isdrive = true;
const notdrive = false;
const sage = 45;

if (age==18) {
    console.log("Age is 18");
}

else if (age==15){
    console.log("Age is 15")
}

else{
    console.log("Age is not 18 or 15")
}

if (typeof vari != "undefined"){
    console.log("Vari is defined")
}


if (isdrive && age>18){
    console.log("I am drive")
}

else if (notdrive || age==18){
    console.log("I amnot drive")
}


console.log(sage==45?  "Age is 45" : "Age is not 45")


// Switch case statements

switch (age) {
    case 18:
        console.log("I am 18")
        break;
        
    case 28:
        console.log("I am 28")
        break;

    case 38:
        console.log("I am 38")
        break;

    default:
        console.log("You are unknown")
        break;
}























