# Javascript

## Table of contents

1. [Primitive data](#1-primitive-data)
2. [Variables, Constants & Assignment](#2-variables,-constants-&-assignment)
3. [Arithmetic Operator's & BODMAS](#3-arithmetic-operator's-&-boomas)
4. [If : conditional statement](#4-if-:-conditional-statement)
5. [While, for loop and for in loop](#5-while-for-loop-and-for-in-loop)
6. [Functions or subroutines](#6-functions-or-subroutines)
7. [Objects and Array](#7-objects-and-array)
8. [prototype](#8-prototype)
9. [Inheritance](#9-inheritance)
10. [Javascript in html](#9-javascript-in-html)
11. [Regular expression in JS](#10-regular-expression-in-js)


## 1. Primitive data

1. **String**: Defined by quote e.g. `"hello"`
    * `"hello".length`하면 5를 반환한다. 
    * `"hello".indexOf(o)`하면 4를 반환한다. 
    * `"hello".toUpperCase()`하면 "HELLO"를 반환한다.
2. **Number**: integer, floating point number
    * 연산관련: `Math.pow()`, `Math.round()`, `Math.ceil()`, `Math.floor()`, `Math.sqrt()`, `Math.random()`
    * data type 확인: `typeof 1` 은 "number"반환한다.
3. **Boolean**: `true`, `false` 
4. **null**, **undefined**
    * null: `null` is an assignment value. It can be **assigned** to a variable as a representation of no value.
    * undefined: `undefined` means a variable has been declared but has **not yet been assigned a value**
5. **NaN**: Not a Number 
6. 이와 같은 primitive data type은 object는 아니다. 하지만 primitive data type을 객체처럼 다룰 수 있도록 하기 위한 객체를 자바스크립트에서는 제공한다. 이를 **wrapper object**라고 한다. 따라서 아래의 예처럼 String은 object는 아니지만 wrapper obejct 덕분에 obejct처럼 행동할 수 있다. Number, String, Boolean이라는 wrapper obejct가 존재하고 다만 null, undefined는 이러한 wrapper object가 존재하지 않는다. 
  ```
  var str = 'coding'
  //str = new String('coding') 아래 object access operator를 사용하기 위해 wrapper obejct가 생성됨. 
  console.log(str.length); //6 -> 마치 객체와 같이 행동한다.
  console.log(str.charAt(0)); //"C" -> 마치 객체와 같이 행동한다.

  str.prop = 'everybody' //그러나 이런 것은 안된다. 에러는 뜨지 않지만 property를 추가할 수는 없다. 
  console.log(str.prop); //undefined
  ```

## 2. Variables, Constants & Assignment

1. **Variable**: var라는 박스를 만들고, name이라는 이름을 붙이고, "Lawrence"라는 값을 할당.
	* name은 메모리 주소 대신 변수에 접근할 수 있는 방법.
	* javascript is loosely data-typed. You can change variable type.
  ```
  var name = "Lawrence";
  name //Lawrence
  name = "Turton";
  name //Turton

  var blank;
  blank  //blank is an empty box.
  blank = "new value";
  blank  //new value
  blank = 100;
  blank  //100

  var a='coding', b='everybody';  //한번에 여러개의 변수 생성
  ```

2. **Constant**: Always stay the same.
	* 무조건 초기값 필요.
	* 절대 바꿀 수 없다. 
  ```
  const lastname = "turton";
  lastname //turton
  lastname = "lawrence" // error
  ```

3. **`window`**: 모든 variable(box)를 모두 확인할 수 있는 warehouse 같은 존재.
  * 웹 브라우저 환경의 전역객체(global object)이다. 모든 객체는 이 전역객체의 property다. (`window` object is a highest level object, and `window`'s properties globally accessable.)
  * 호스트 환경에 따라 전역객체의 이름이 다르다 예) nodejs에서는 global이라는 이름을 쓴다. 
  * 함수내에서 variable을 정의할때 var, const 쓰는 것을 잊으면 안된다. 그냥 (파이썬처럼) 할당하면 window object 내 즉, global variable을 계속 만드는 셈이다.
  ```
  func(){
    alert('hello')
  }
  func()
  window.func() //사실 func()는 window의 property인 func()를 실행하는 것이다. 
  ```
4. 복제와 참조
* **복제(copy)**: copy는 primitive data type일때만 가능하다. 
  ```
  var a = 1;
  var b = a;
  b = 2;
  console.log(a) //1
  ```
* **참조(reference)**: primitive data type이 아닌 다른 데이터 타입에서는 복제가 불가능하다. a,b라는 변수의 이름은 변수 포인터(바로가기와 같은 개념)에 해당하고, 특정 객체가 위치하는 위치를 가르킨다. 
  ```
  var a = {'id':1}
  var b = a
  b.id = 2
  console.log(a.id) //2
  ```
  ```
  var a = {'id':1}
  var b = a
  b.id = {'id':2}
  console.log(a.id) //1
  ```


## 3. Arithmetic Operator's & BODMAS

1. 연산자와 연산자 우선순위
  - 숫자가 클수록 우선순위가 높다.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
  - BODMAS
      * B: Bracket
      * O: pOwers(). functions
      * DM: Division and Multiplication
      * AS: Addition and Substraction

2. Assignment Operators
  - `+=, -=, *=, /=, %=, **=`
  - string + string 가능: `"A"+"B"` 는 `"AB"`
  - string + number 가능(**Polymorphism**): `"A"+10` 는 `"A10"`, `"A"+null` 는 `"Anull"` 

3. Comparison Operators
  * Always return boolean value(e.g. `true`, `false`)
  * **`==`**(equal operator): 되도록 쓰지 않기
    > [주의] `NaN == NaN;`은 `false`를 반환한다. (0/0과 Inf/0를 같다고 볼 수 있는가)
    * polymorphism
    > `null == undefined;`은 `true`를 반환한다.
    > `10 == "10";`은 `true`를 반환한다.
  * **`===`**(strict equal operator): 값뿐만 아니라 data type도 확인한다.
    > `null === undefined;`은 `false`를 반환한다.
    > `10 === "10";`은 `false`를 반환한다.  
  * `!=`, `!==`, `>`, `<`, `>=`, `<=`
  * `&&`이 `||`보다 우선순위가 높다.


## 4. If : conditional statement
* condition은 true 또는 false 값
  ```
  if (condition)
  {
    instructions
  }
  else if()
  {
    instructions
  }
  else
  {
    instructions
  }
  ```
* 논리 연산자: `&&`, `||`
* 참고하기:  https://dorey.github.io/JavaScript-Equality-Table/


## 5. While, for loop and for in loop
1. while
  ```
  while(조건){

  }
  ```
2. for loop
  * (1) --> (2) --> (3) 순서로 실행됨
  * `i++`는 실행후 +1
  * `++i`는 실행전에 +1해서 실행
  ```
  for (초기값(처음에 한번만 실행);(1)조건;(3)조건이 참일때 실행) // for(var i=0; i < 10; i++){}
  {
    (2)Do something
  }
  ```
3. for in loop
  ```
  for (using in 연산자) //for (key in grades)  여기서 grades는 object!
  {
    Do something
  }
  ```
4. 반복문 제어하기: `break`, `continue`


## 6. Functions or subroutines
1. 함수
  * They're tasks defined by a set of instructions that can be run at a certain point in time.
  * 입력값은 여러개가 가능하지만, 출력값은 하나다. 
    ```
    function makeCoffee(parameter,...){
      ...
      return 0;
    }
    ```
  * 함수에서는 variable, value라고 칭하지 않고, parameter, arguement라고 한다. 
    * parameter는 값을 담기위한 빈 박스
    * argument는 값
  * 그래서 please add this parameter 또는 Please pass in this argument하면 문맥상 바로 함수 이야기를 하는 것을 알 수 있다. 
  * Functions are callable **objects**. Callable objects are invoked by `()`(e.g. `makeCoffee()`). 즉, function도 obejct이다. 그래서 다음과 같은 방법으로도 정의가 가능하다. 
    ```
    //방법1
    makeCoffee = function(parameter,...){
      ...
      return 0;
    }
    //방법2: 익명 함수를 정의하고 바로 호출하기
    (function(){})();
    ```
  * 함수는 변수에 할당될 수도 있고, 또 다른 함수내에서 매개변수로 사용될 수도 있으며 리턴값으로도 쓸 수 있다. 이러한 함수의 속성때문에 함수는 **first-class object**에 해당된다. 
  * `arguments`: 함수에 전달된 argumnet에 해당하는 Array 형태의 객체. 아래 예시에서 parameter를 따로 정의하지않고 인자를 넣으면 arguments array에 인자가 담기게 된다. 
  ```
  function sum(){
    var i, _sum = 0;
    for (i=0; i<arguments.length; i++){
      document.write(i + ': ' + arguments[i] + '<br/>');
      _sum += arguments[i];
    }
    return _sum;
  }
  documnet.write('result :' + sum(1,2,3,4))
  ```
  * `argumnets.length`가 함수에 정의된 모든 인자의 수를 의미한다면 `{function}.length`는 함수로 전달된 실제 인자의 수(=정의된 parameter 수)를 의미한다. 따라서 함수를 정의할때 인자의 수가 일치하는지 확인할때 두 값을 사용할 수 있다. 
  ```
  function zero(){
    console.log('zero.length', zero.length, 'arguments.length', argumnets.length)
  }
  function one(arg1){
    console.log('one.length', one.length, 'arguments.length', argumnets.length)
  }
  function two(arg1, arg2){
    console.log('two.length', two.length, 'arguments.length', argumnets.length)
  }

  zero(); //둘다 0
  one('val1', 'val2') //one.length 1 arguments.length 2
  two('val1') //two.length 2 arguments.length 1
  ```
  * 지금까지 함수 정의 방식은 **함수 리터럴 방식**(`function func(){}`)이었고, 아래와 같이 **인스턴스 방식**으로도 함수 객체를 생성할 수 있다. 
  ```
  var sum = new Function('x', 'y', 'return x+y;')
  ```
  * 복제와 참조 유의하기(call by value vs. call by reference)
    * primitive data type을 인자로 넘겼을때
    ```
    var a = 1;
    function func(b){
      b = 2;
    }
    func(a);
    console.log(a) //1
    ```
    * 참조 데이터 타입을 인자로 넘겼을때 
    ```
    var a = {'id':1}
    function func(b){
      b = {'id':2}
    }
    func(a);
    console.log(a.id) //1
    ```
    ```
    var a = {'id':1}
    function func(b){
      b.id = 2
    }
    func(a);
    console.log(a.id) //2
    ```
2. Scope(유효범위)
  * scope = access. And an object has a scope. 
  * 지역변수와 전역변수: 지역변수는 함수내에서만 사용가능하지만 전역변수는 어디에서나 사용가능하다. 그러나 함수내에서는 지역변수가 전역변수보다 더 우선시된다. 
  ```
  var vscope="global";  //전역변수
  function fscope(){
    var vscope = 'local';  //지역변수
    alert(vscope);
  }
  fscope();
  ```
  * 자바스크립트에서는 함수 내에서 전역 변수 접근이 가능하다.
  ```
  var vscope="global";  //전역변수
  function fscope(){
    vscope = 'local';  //전역변수 접근
    alert(vscope);
  }
  fscope();
  ```
  * for loop의 변수는 전역변수이다.(=loop가 끝난 후에도 변수는 남아있다.)
  ```
  function a(){
    i = 0;
  }
  for (var i=0;i<5;i++>){
    a();           //i가 계속 0으로 바뀌어서 무한 루프가 된다. 
    document.write(i);
  }
  ```
  * 최대한 지역변수를 사용하도록 한다. 불가피하게 전역변수를 사용해야할 경우 **전역변수 object를 하나 만들어서** 그 안에 다 넣기. 이것마저도 싫다면 함수안에 다 넣고 바로 호출하기.
  ```
  var myapp = {};
  myapp.calculator = {
    'left':null,
    'right':null
  }
  myapp.coordinate={
    'left':null,
    'right':null
  }
  myapp.calculator.left = 10;
  myapp.calculator.right = 20;
  function sum(){
    return myapp.calculator.left + myapp.calculator.right;
  }
  documnet.write(sum());
  ```
  ```
  (function(){
    var myapp = {};
    myapp.calculator = {
      'left':null,
      'right':null
    }
    myapp.coordinate={
      'left':null,
      'right':null
    }
    myapp.calculator.left = 10;
    myapp.calculator.right = 20;
    function sum(){
      return myapp.calculator.left + myapp.calculator.right;
    }
    documnet.write(sum());
  }())
  ```
  * **정적 유효범위**: 자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 이러한 유효범위의 방식을 정적 유효범위(static scoping) 또는 렉시컬(lexical scoping)이라고 한다. 아래 예시에서 만약 동적 스코핑이 작동했다면 {}를 하나씩 벗으면서 i값을 확인하겠지만, 정적 스코핑에서는 함수 바깥에 어떤 다른 함수가 정의될 지 알 수 없기때문에 정의된 시점을 기준으로 유효범위를 판단한다. 
  ```
  var i = 5;

  function a(){
    var i = 10;
    b();
  }

  function b(){
    document.write(i);
  }

  a();  //5가 출력된다. 
  ```
3. callback
  * 프로그래밍에서 **콜백(callback)**은 다른 코드의 인수로서 넘겨주는 실행 가능한 코드를 말한다. 예로 들어, 함수의 인자로 다른 함수를 사용하는 것. 
  * 웹에서는 비동기처리에서 주로 사용한다.(**ajax**배우기)
4. 함수의 호출
  * 앞서서 함수또한 객체라고 했다. 따라서 모든 정의된 함수는 속성(property)와 메소드(method)를 갖는다. 여기서는 함수 객체의 내장 method인 apply을 살펴보겠다.
  * `{function}.apply()` : 아래 예시에서 `sum.apply(null, [1,2])`와 `sum(1,2)`는 동일한 것이다. 
  ```
  function sum(arg1, arg2){
    return arg1 + arg2;
  }
  alert(sum.apply(null, [1,2]))
  ```
  * 아래 예시에서 `apply()`의 첫번째 인자로 o1과 o2를 사용하면, 함수 실행시 `var this = o1;`(또는 `var this =o2;`)가 정의되는 것과 같은 결과가 출력된다. 좀더 정확히는 `sum.apply(o1)`을 실행하는 순간 `o1.sum()`이 사실 실행되는 것이고 따라서 this에 o1 객체가 전달되는 것이다. 
  ```
  o1 = {val1:1, val2:2, val3:3}
  o2 = {v1:10, v2:50, v3:100, v4:25}
  function(){
    var _sum = 0
    for(name in this){
      _sum += this[name]
    }
    return _sum;
  }
  alert(sum.apply(o1)) //6
  alert(sum.apply(o2)) //185
  ```
5. closure
  * closure는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 
  * 내부함수와 외부함수: 아래 예시에서 내부함수는 외부함수의 지역변수에 접근할 수 있다. 
  ```
  function outer(){
    var title = "hello world";
    function innner(){
      alert(title);
    }
    inner();
  }
  outer(); //'hello world'가 경고창에 뜬다. 
  ```
  * 외부함수가 종료된 이후에도 내부함수에서 외부함수의 지역변수에 접근할 수 있다는 것이 클로저의 아주 중요한 특징이다. 
  ```
  function outer(){
    var title = "hello world"
    return function(){
      alert(title);
    }
  }
  var inner = outer();
  inner();  //'hello world'가 출력된다. 
  ```
  * closure는 private variable을 정의할때 사용된다. 
    * 아래 예시에서 두 객체 ghost와 matrix는 title이라는 변수를 공유하지 않는다. 
    * 그리고 set_title, get_title이라는 함수만 title이라는 변수에 접근할 수 있다. -> private variable
    ```
    function factory_movie(title){
      return {
        get_title:fuction(){
          return title;
        },
        set_title: function(_title){
          if(typeof _title ==="string"){
            title = _title;
          }
          else{
            alert("제목은 문자열이어야 합니다. )
          }
          
        }
      }
    }
    ghost = factory_movie("Ghost in the shell")
    matrix = factory_movie("Matrix")
    alert(ghost.get_title());  //Ghost in the shell
    alert(matrix.get_title());   //Matrix
    
    ghost.set_title("공각기동대");
    alert(ghost.get_title());    //공각기동대
    alert(matrix.get_title());    //Matrix
    ```
  * 클로저를 이해해보자
    * 아래 예시 해설 : 배열내의 함수의 실행할때 참고할 i(외부함수의 지역변수)가 없다. 그래서 전역 변수인 for 문의 i를 계속 출력한다. 즉 첫번째 for loop이후 5가 된 i가 5번 출력된다.
    ```
    var arr = []
    for(var i =0;i<5;i++){
      arr[i] = function(){
        return i;
      }
    }
    for (var index in arr){
      consol.log(arr[index]());
    }
    ```
    * 0, 1, 2, 3, 4가 출력되도록 만들어보자. 각 배열의 원소는 내부 함수에 해당한다. 이를 실행시키면 id는 외부 함수의 지역변수인 id 즉 i르 출력하게 된다. 
    ```
    var arr = []
    for(var i =0;i<5;i++){
      arr[i] = function(id){
        return function(){
            return id
        }
      }(i)
    }
    for (var index in arr){
      console.log(arr[index]());
    }
    ```



## 7. Objects and Array
1. Objects
  * object의 특성
    * (1)properties(key(noun):value(adjective)), (2)subroutines 또는 method(key(verb):value(set of instructions))를 가진다. 
    * **It is iterable.** --> 반복문에서 사용가능
  * object 생성하기
    * `var object = {key:value,...};`: literal way to create an object. 아래와 같은 방법도 가능. 
    ```
    var grades = {};
    grades['egoing] = 10;
    grades['k8805] = 6;
    ```
  * object 다루기
    * `object.member`/`object["member"]`: member access. subroutine의 경우 괄호 붙여주기(`object.member()`/`object['member']()`)
    > `console.log()`도 console이라는 object의 log라는 subroutine을 사용하는 것이다. 
    * `object.member = value`를 통해서 기존 값을 변경하거나, 새로운 member를 추가할 수 있다. 
    * `delete object.member`로 member를 지울 수 있다. 
  * `this`: 함수내의 argment. 이 argument는 함수가 소속되어 있는 객체를 가리킨다.
    * obejct가 function(e.g. 'show')을 가지는 경우, 여기서 정의된 함수 내의 this는 grade 객체를 가리킨다. 
    ```
    var grade = {
      'list':{'egoing':10, 'k8805':8}  //(1) 객체의 데이터를 담는 박스
      'show':function(){               //(2) 객체가 어떻게 행동할 것인가에 대한 동작을 담는 박스
        for (var name in this.list){
          console.log(name, this.list[name])
        }
      }
    }
    grade.show()  //동작 실행
    ```
    * 이렇게 한 객체에는 **(1) 데이터를 담는 박스와, (2) 객체가 어떻게 행동할 것인가에 대한 동작을 담는 박스**로 구성되어 있다. 
    * default로 this는 window를 가리킨다. 정확히는, this는 context word로서 함수가 소속되어 있는 바로 바깥 객체를 가리킨다.
    ```
    var temp = {
      prop : this
    }
    temp.prop //window object를 return 한다.
    ```
    ```
    function global(){
      return this; //Window obejct를 return 하는데 그 이유는 global function 바깥에 Window라는 오브젝트가 있기 때문. 즉 global 함수는 object 내에 정의된 함수.
    }
    ```
    ```
    var object = {
      embed1:{
        embed2:true,
        method: function(){return this;}
      }
    };
    object.embed.method() //embed1 object를 리턴한다. 
    ```
    * 만약 this의 맥락을 바꾸고 싶다면, `object.embed.method()` 대신 `object.embed.method.call({this 대신 사용할 obejct})`를 사용하면 된다. 

    

2. Arrays
  * array의 특성
    * list objects(즉, obejct의 한 종류). 
    * 각각의 데이터를 원소(element)라고 부른다. Each element is assigned a number. 
    * **It is iterable.** --> 반복문에서 사용가능
    * function도 element로 가질 수 있다. 
  * array를 만드는 방법
    * `var member = [element,...];`: literal way to create an array.
  * array를 다루는 방법
    * `array[0]`: **Computed** member access. 마찬가지로 subroutine의 경우 괄호 붙여주기. "Computed"의 의미는... `array[0]`과 `array[1+1-2]`의 결과는 동일하다.
    * `array[] = value`를 통해서 기존 값을 변경할 수 있다.
    * `array.length = value`를 통해서 마지막에 새로운 값을 추가할 수 있다. 여기서 length라는 property는 동적으로 변한다. 
    * `array.shift()`: 첫번째 원소를 삭제하고, 삭제한 값을 return 한다. 
    * `array.pop()`: 마지막 원소를 삭제하고, 삭제한 값을 return 한다. 
    * `array.unshift("string", 3,...);`: array 앞부분에 element를 추가할 수 있다.
    * `array.push(200,30,'string')`: array 마지막에 element(여러개)를 추가할 수 있다.
    * `array.concat([200,30,'string'])`: 두 array를 합치는 방법.
    * `array.splice(index, # of elements to delete)`: 여러 원소를 삭제. 그리고 삭제한 원소를 반환한다.
    * `array.splice(index, 0, "string", 200,...)`: 특정 위치에 원소를 추가할때도 사용할 수 있다.
    * `array.splice(index, 2, "string", 200,...)`: 삭제와 추가 동시에도 가능하다.
    * `array.sort()`, `array.reverse()`: 배열의 정렬
  
3. Objects and Array
  * object는 object/array를 property로 가질 수 있고, array 또한 element로 object를 가질 수 있다.  
  * `.`/`[]` syntax를 혼합해서 member acess에 사용할 수 있다. 




## 8. prototype
1. Constructor(생성자): 객체를 만드는 역할을 하는 함수. 즉 instance를 생성하는 함수. 관습상 function의 이름을 대문자로 시작한다. 
  * new operator와 함께 변수를 정의하면 객체가 생성된다.
  ```
  function Person(){};
  var p = new Person()
  ```
  ```
  function Person(name){
    this.name = name;
    this.introduce = function(){
      return 'My name is ' + this.name;
    }
  };
  var p = new Person("egoing");
  var q = new Person("leezche");
  ```
2. this
  * this는 함수 내에서 함수 호출 맥략(context)을 의미한다. `this`는 함수 안에서 사용되는 변수이다. 아래 예시에서 this는 window이다. 
  ```
  function func(){
    if (window===this){
      console.log("window===this")
    }
  }
  func();  //window===this
  ```
  * 객체의 메소드를 호출할때 this는 메소드가 소속된 객체(o)를 가르킨다. 위의 예시에서 `func()`는 window라는 객체내에 정의된 메소드이기 때문에 this가 window가 되었던 것이다. 
  ```
  var  o = {
    func:function(){
      if(o===this){
        console.log("o===this")
      }
    }
  }
  o.func();  //o===this
  ```
  * 생성자 내의 this의 의미를 알아보자. o1이라는 변수 정의과정에서 Func()를 실행하게 되면 funcThis는 **window**가 되고(앞에 var이 없으니 지역변수가 아닌 전역 변수 funcThis의 값을 바꿈. window로), o2라는 변수를 생성하면 funcThis는 **o2 자체**가 된다. 
  ```
  var funcThis = null;
  function Func(){
    funcThis = this;
  }
  var o1 = Func();
  if (funcThis===window){
    document.write('window <br/>`);
  }
  var o2 = new Func()
  if (funcThis===o2){
    document.write('o2 <br/>')
  }
  ```
  * 자바스크립트는 아주 유연한 언어여서 특정 메소드가 특정 객체에 소속되어 있지 않는 경우도 그러한 것(특정 객체에 소속된 메소드)처럼 사용할 수 있다. 아래 예시를 참고하자. 즉, 모든 객체 내에 메소드를 정의할 필요가 없어진다. 함수만 따로 정의해서도 객체의 메소드처럼 사용할 수 있다.
  ```
  var o = {}
  var p = {}
  function func(){
    switch(this){
      case o:
        document.write('o<br/>');
        break;
      case p:
        document.write('p<br/>');
        break;
      case window:
        document.write('window<br/>');
        break;
    }
  }
  func() //windw
  func.apply(o) //o
  func.apply(p) //p
  ```
3. Prototype
  * 지금까지의 설명대로 constructor with prototype을 만드는 것은 object를 생성하는 constructor에 **원형(주물, prototype)**을 넣어두는 것과 같다. 따라서 constructor로 object를 생성하면 **prototype의 형태(원형의 형태)**의 객체가 만들어지는 것이다. 아래와 같은 예시를 prototype chain이라고 한다.
  ```
  function Ultra(){}
  Ultra.prototype.ultraProp= true;

  function Super(){}
  Super.prototype = new Ultra();

  function Sub(){};
  Sub.prototype = new Super();

  var o = new Sub();
  console.log(o.ultraProp);
  ```



## 9. Inheritance 
* 상속을 하기 위한 준비를 해보자. 생성자(constructor)의 prototype property에 새로운 property를 추가하는 방법으로도 생성자를 변경할 수 있다. 
  ```
  function Person(name){
    this.name = name;
    this.introduce = function(){
      return 'My name is ' + this.name;
    }
  }; //이 방법 대신
  function Person(name){
    this.name = name;
  };
  Person.prototype.name = null;
  Person.prototype.introduce = function(){
    return 'My name is '+ this.name;
  } //이렇게도 정의가능하다. 
  ```
* 아래와 같은 상속과정(`Programmer.prototype = new Person();`)을 통해 Programmer라는 생성자로 만들어지는 객체는 Person으로 만들어지는 객체의 속성을 모두 지닌다.
```
function Programmer(name){
  this.name = name;
}
Programmer.prototype = new Person();
var p1 = new Programmer('egoing');
document.write(pl.introduce() + '<br/>');
```
* 만약 기능을 추가하고 싶다면 아래와 같이(`Programmer.prototype.coding = function(){}`) property를 추가해주면 된다. 
```
Programmer.prototype.coding = function(){
  return "hello world";
}
var p2 = new Programmer('egoing');
document.write(p2.coding() + '<br/>');
```


## 10. Standard built-in object
* Object, Function, Array, String, Boolean, Number, Math, Date, RegExp
* 표준 내장 객체 `Array`에 사용자가 임의의 method 추가하는 것이 가능하다. 
```
#function getRandomValue(arr){
#  var index = Math.floor(arr.length*Math.random());
#  return arr[index];
#}
Array.prototype.getRandomValue = function(){
  var index = Math.floor(this.length*Math.random());
  return this[index];
}
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
console.log(arr.getRandomValue());
```
1. object
  * 내장 object인 obejct를 알아보자. 모든 obejct는 이 obejct의 모든 속성을 inherit받는다. 
  * obejct methods에서 prototype이 있는 것과 없는 것의 차이는? 없는 것은 Obejct(생성자 함수) 자체의 method이고, prototype이 있는 것은 상속받은 모든 obejct가 이러한 method를 가지게 된다. 
  ```
  //Object.keys()
  var arr = ["a", "b", "c"];
  console.log(Object.keys(arr))  //Obejct라는 생성자 함수는 객체이므로 함수를 가질 수 있다. keys라는 함수를 이용해서 특정 arr이라는 object의 키 값을 반환하겠다. 

  //Object.prototype.toString()
  var o = new Obejct();
  console.log(o,toString());

  var a = new Arrary(1,2,3);
  console.log(a.toString());
  ```
  * 다른 method 참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
  * 사용자가 직접 method를 추가할 수 있다. 그러나 이 방법은 실제로는 사용하지 않는 것이 좋다. 
  ```
  Obejct.prototype.contain = function(needle){
    for (var name in this){
      if (this[name] === needle){
        return true;
      }
    }
    return false;
  }
  var o = {'name':'egoing', 'city':'seoul'};
  console.log(o.contain('egoing')); //true
  ```
  ```
  //이렇게 할 경우 우리가 원하는 결과가 나오지 않는다. contain도 같이 출력된다. 
  for (var name in o){
    console.log(name)
  }
  //hasOwnProperty()함수를 써야한다.
  for (var name in o){
    if (o.hasOwnProperty(name)){
      console.log(name);
    }
  }
  ```



## 11. javascript in html
* `<script>...</script>`: 직접 tag사이에 써도 되지만, 
  > ```
  <script>
    console.log("Hello world");
  </script>
  ```
* `<script type="text/javascript" src="greeting.js"></script>`: markup과 javascript 파일 분리하기(cf. 최신 JS에서는 type="text/javascript"는 생략 가능하다.)
* javascript 파일이 클수록 html 문서 마지막에 loading하기. 그래야 페이지 rendering이 다소 빨리 진행되는 것처럼 느껴진다. + `console.log()`로 내용 다 log 하기


## 12. Regular expression in JS
* 정규 표현식은 **컴파일(compile)**과 **실행(execution)** 두 단계로 이루어진다. 

1. 컴파일(compile)
  * 정규 표현식을 생성하는 두 가지 방법이 있다.
  * (1) 리터럴 방식: `var pattern = /a/`
  * (2) 인스턴스 방식:  `var pattern = new RegExp('a');`
2. 실행(execution)
  * {RegExp}.exec()(추출이 목적): `pattern.exec('abcde');` 찾고자 하는 문자열이 있으면 그 문자열을 반환하고, 없으면 `null`을 반환한다. 
  * {RegExp}.test()(존재 유무 확인): `pattern.exec('abcde');` 찾고자 하는 문자열이 있으면 `true`을 반환하고, 없으면 `false`을 반환한다. 
  * {String}.match()(exec()과 유사한 방법): `'abcdef'.match(pattern)` 
  * {String}.replace(): `'abcdef'.replace(pattern, 'A')` , `"coding everybody".replace(/(\w+)\s(\w+)/, "$2, $1")`(everybody, coding이 출력된다. $는 그룹을 가져올때 쓰는 방법)
3. 옵션
  * **i(gnore)**: 대소문자를 무시한다. e.g. `var oi = /a/i; console.log("Abcde".match(oi));`
  * **g(lobal)**: 검색된 모든 결과를 리턴한다. e.g. `var og = /a/g; console.log("abcdefa".match(og));`
4. 정규 표현식 시각화 및 확인하기
  * 시각화: https://regexper.com/
  * 확인: https://regexr.com/
5. 실제 사용 예시
  ```
  var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
  var content = "생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다.;
  var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">' + url + '</a>';
  });
  console.log(result);
  ```





### let
* ES6 버젼에서 새로 등장한 문법
```
var symbolName = "value reference in memory"
let letSymbol = "scoped value"
const SymName = "constant value in memory"
```
* var은 global하게 존재하지만, let과 const는 if/for block(`{}`)과 같은 scope 내에만 존재한다.
* c.f. function에서는 우리가 아는 것처럼 var도 행동한다. 

### DOM

* DOM: Document Object Model
* Document는 Window obejct의 내부 property obejct
* html document의 요소를 property로 가진다.
* Dom is object representation of document. 즉, javascript로 html을 제어할 수 있게된다. 

* How to access html element
  * `document.getElementsByTagName('p')`: 모든 p(paragraph) element를 return('s'가 붙으면 array 형태로) 한다. + `document.getElementByTagName()`, `document.getElementById()`, `document.getElementsByClassName()`, `document.querySelectorAll()`

* Changing element's contents
  * `console.dir(document.getElementById("Hello"));` Document object `document.getElementById("Hello")`의 속성을 알아보자
  * `document.getElementById("Hello").innerText = 'new world';` inner text를 바꾸는 방법
  * 같은 부분을 여러번 바꾸고 싶다면 변수로 할당 후 변수를 변경하면 된다.
  ```
  var pHello = document.getElementById('hello');
  pHello.innerText = 'new world' 
  pHello.innerText += ' order'
  ```
  * `.innerText`는 text 자체이지만, `.innerHTML`은 text를 html로 rendering한다. 즉, `pHello.innerText += "<span>hello world</span>"`와 같은 방법이 가능하다. (실제로 span tag가 생성됨)
  * `.outerHTML`은 p tag를 다음과 같이 h2 tag로도 변경할 수 있다. `pHello.outerText += '<h2 id="hello">new world <span>hello world</span></h2>"`와 같은 방법이 가능하다.(원래는 h2가 아니고 p였다.)
  * `document.querySelectorAll('h1 span')`은 object가 아닌 array를 반환한다. 따라서 변수로 정의할때 [0]을 마지막에 붙여 인덱싱하도록 하자. (e.g. `var spanh2 = document.querySelectorAll('h1 span')[0];`)

* Changing element's style: CSS로 제어하던 style을 javascript로 제어해보자. CSS를 제어하는 것이 아니고, html tag내에 attribute를 추가하는 방법으로 style을 제어하는 것이다. 
  ```
  var el = document.getElementById('hello');
  el.style.background = 'blue';
  el.style.color = 'white';
  el.style.width = "200px";
  ```
  * `el.style.cssText = "background:blue; color:white; width:200px;"` 이렇게 한줄로도 표현 가능하다. 그리고 `+=`를 이용해서 declaration 추가가 가능하다. 
  * getComputedStyle(el): CSS로 제어된 결과를 보여준다. 

* Event handler
  * HTML에 다음과 같은 마크업이 있다고 가정하자.
  ```
  <select name="car">
    <option value='volvo'>Volve</option>
    <option value='saab'>Saab</option>
    <option value='fiat'>Fiat</option>
    <option value='audi'>Audi</option>
  </select>
  ```
  * 이 select 파트를 JS로 제어해보자. 
  ```
  var select = documnet.getElementsByName('cars')[0];
  
  select.onclick = function(event){   //onclick에 덮어쓰기
    console.log(event);
  };

  function ClickCallback(event){
    console.log('clicked by add event listener');
  }
  select.addEventListener('click', ClickCallback);  //click에 추가

  select.removeEventListener('click', ClickCallback);  //추가한 것을 지우고 싶을 때
  ```

* javascript를 이용해서 동적으로 document element(tag)를 추가하기
```
var element = document.createElement('div');
element.style.cssText = "width:200px; height:200px; background:blue;"
element.onclick = function(){alert('hello');};
document.body.appendChild(element);
```
* `appendChild()`는 제일 마지막에 추가된다. 특정 위치에 추가하고 싶을때는, 
```
var target = document.getElementById('yellow');
document.body.inserBefore(element, target)  //target 앞에 element를 넣겠다. 
```

* `document.write('coding everybody <br />')`: html body text를 생성한다.

### Tips
* **Memory hoisting**(=lift up): Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. JIT compiler는 code를 훑어보면서, syntax를 확인하고,
variable name만 lift up한다. (https://medium.com/@gourav_m/javascript-memory-hoisting-94489559cfcf)
  > ```console.log(name);
  var name = 'Gourav'
  ```
  의 결과는 `undefined`이다.


* 주석처리 : `//`, `/*...*/`
* `;`: 명령이 끝났다는 것을 명시하는 것. javascript에서는 쓰지 않아도 동작하긴 한다. 
* `dir(obejct)`  가능 
* `<script type="text/javascript"></script>` 는 언제나 body tag 제일 아래에 쓰도록! head에 써도 되지만 만약 javascript 파일이 매우 큰 경우 javascript 파일이 위에 있을수록 페이지 로딩이 느리게 된다. 
* console 창 정리: `clear();`

* `alert()`는 경고창 생성, `prompt()`는 입력값을 받음(데이터 타입은 String)
* 개발자 도구 debugging: 생활코딩(Javascript-반복(6/6): 반복문의 중첩) 강의 보기



