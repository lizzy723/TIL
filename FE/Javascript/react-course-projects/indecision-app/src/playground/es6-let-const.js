//var, let, and const
var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar)

let nameLet = "Andrew";
//let nameLet = "Mike";
nameLet = "Mike";
console.log("nameLet", nameLet)

const nameConst = "Andrew";
//const nameConst = "Mike";
//nameConst = "Mike";
console.log("nameConst", nameConst)


//function scoping
function getPetName(){
    var petName = 'Hal';
    return petName
};
getPetName();
//console.log(petName)
var petName = getPetName();
console.log(petName)


//Block scoping
const fullName = "Andrew Mead"
let firstName;
if (fullName){
    firstName = fullName.split(" ")[0]
    console.log(firstName)
}
console.log(firstName)