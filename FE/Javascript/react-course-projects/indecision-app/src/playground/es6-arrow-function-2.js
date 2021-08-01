//arguments object - no longer bound with arrow functions

const add = function(){
    return arguments[0] + arguments[1];
};

// const add = () => {
//     return arguments[0] + arguments[1];
// };

console.log(add(55,2));


//this keyword - no longer bound

const user = {
    name: "Mike",
    cities:["Philadelphia", "New York", "Dublin"],
    printPlacesLived(){
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};
console.log(user.printPlacesLived());

//challenge
const multiplier = {
    numbers : [1,2,3],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((n) => n*this.multiplyBy);
    }
};
console.log(multiplier.multiply());