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

//22. Inferred Globals & Scope
var engine = {};

function runExpression(){
    var a = 10;

    function add(){
        engine = "New string"
        //const engine = "New string"
        //var engine = "New string"
    }

    add();
}


//add scope의 engine = "New string"은 function밖으로 나가 global variable에 할당된다.
//따라서 local variable로 engine을 사용하고 싶다면 꼭 var 또는 const를 사용할 것!



//24. Constructor
function Apple(x, y, color, score){

    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;

};

var apple1 = new Apple(10, 20, "red", 200);
var apple2 = new Apple(10, 20, "green", 200);
var apple3 = new Apple(10, 20, "pink", 200);


// 28. if statements
var carsleft =1,
    carsright = 0,
    greenMan = 'no';

if (greenMan==='yes')
{
    console.log("cross the road.")
}
else if( carsleft===0 && carsright==0)
{
    console.log("All clear! Cross the road.")
}
else
{
    console.log("Stay where you are!")
}

// 29. For loop
var classRegister = ["Lawrence", "John", "Jeff"]

for (var i = 0; i<classRegister.length; i++)
{
    console.log(classRegister[i])
}

//뒤에서 앞으로
for (var i = classRegister.length-1; ㅑ>=0; i--)
{
    console.log(classRegister[i])
}

//for in loop
for (var index in classRegister)
{
    console.log(classRegister[index])
}