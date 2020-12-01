// 8. Variables
var num = 10;
console.log(num)


// 12. Functions or subroutines
function makeCoffee( sugar, milk )
{
    var instructions = "Boil water,";    
    instructions += " pour into cup,";
    instructions += " add coffee granules,";
    instructions += " add " + sugar + " spoons of sugar,";
    instructions += " add " + milk + "% milk.";
    return instructions;
}

console.log( makeCoffee( 2, 20 ) );


// 13. Objects and Arrays
var car={
    color : 'red',
    speed : 200,
    drive : function(){return "drive";},
    engine : {
        size : 2.0,
        make : "bmw",
        fuel : "petrol",
        pistons: [{maker:"BMW"}, {maker: "BMW2"}]
    }
};

console.log(car.color); //member access
console.log(car.engine.make) ;
console.log(car.drive());

var shoppinglist = [
    "Apple",
    "Orange",
    "pear", 
    function(){return "shopping";}
];

var pointer = "color"
console.log(car[pointer]);
pointer = "speed"
console.log(car[pointer]);