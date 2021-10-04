// Oud stijl

// while loop
let colors = ["yellow","blue","red","orange"];
let i = 0;
while (i < 4){
    console.log(colors[i]);
    i++
}


// for loop
for (let i = 0; i < colors.length; i++){
    console.log(colors[i])
}




// nieuw stijl
//forEach

colors.forEach(color => console.log(color))


// While loop neemt 6 lijnen
// For loop neemt 3 lijnen
// forEach method één lijn

// ik vind dat forEach method makkelijker is

let obj = {
    name:"Mohammed",
    age:34,
    skills:"HTML and CSS",
    drinktea: true
}

//loop in object
for (let i in obj){
    console.log(i + ":" + obj[i])
}