### Primitive data

1. String: Defined by quote e.g. `"hello"`
2. Number: integer, floating point number
3. Boolean: true, false
4. null, undefined
  * null: `null` is an assignment value. It can be assigned to a variable as a representation of no value.
  * undefined: `undefined` means a variable has been declared but has **not yet been assigned a value**
5. NaN: Not a Number 

### Variables, Constants & Assignment

1. Variable: var라는 박스를 만들고, name이라는 이름을 붙이고, "Lawrence"라는 값을 할당.
	* name은 메모리 주소 대신 변수에 접근할 수 있는 방법.
	* javascript is loosely data-typed. You can change variable type.
```
var name = "Lawrence";
name #Lawrence
name = "Turton";
name #Turton

var blank;
blank  #blank is an empty box.
blank = "new value";
blank
blank = 100;
blank
```

2. Constant: Always stay the same.
	* 무조건 초기값 필요.
	* 절대 바꿀 수 없다. 
```
const lastname = "turton";
lastname #turton
lastname = "lawrence" # error
```

- window: variable(box)를 모두 확인할 수 있는 warehouse 같은 존재.

### Arithmetic Operator's & BODMAS
- 숫자가 클수록 우선순위가 높다.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- BODMAS
  * B: Bracket
  * O: pOwers(). functions
  * DM: Division and Multiplication
  * AS: Addition and Substraction

### Assignment Operator's
- `+=, -=, *=, /=, %=, **=`
- string + string 가능: `"A"+"B"` 는 `"AB"`
- string + number 가능(**Polymorphism**): `"A"+10` 는 `"A10"`, `"A"+null` 는 `"Anull"` 


### javascript in html
* `<script type="path_to_js_file"></script>`: 이렇게 파일명을 써도 되고,
* `<script>...</script>`: 직접 tag사이에 써도 된다.
  > ```
  <script>
    console.log("Hello world");
  </script>
  ```
* 위 이전 내용들 다 .js 파일로 정리하기
* markup과 javascript 파일 분리하기!
* javascript 파일이 클수록 html 문서 마지막에 loading하기. 그래야 페이지 rendering이 다소 빨리 진행되는 것처럼 느껴진다. 
* console.log함수로 내용 다 log 하기


### Functions or subroutines
* they're tasks defined by a set of instructions that can be run at a certain point in time.
* syntax
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


### Objects and Array
* Objects: (1)properties(key(noun):value(adjective)), (2)subroutines(key(verb):value(set of instructions))를 가진다. 
  * `{key:value,...}`: literal way to create an object
  * `object.member`/`object["member"]`: member access. subroutine의 경우 괄호 붙여주기(`object.member()`/`object['member']()`)
  > `console.log()`도 console이라는 object의 log라는 subroutine을 사용하는 것이다. 
* Arrays: list objects(즉, obejct의 한 종류). Each element is assigned a number. **It is iterable.** function도 element로 가질 수 있다. 
  * `[element,...]`: literal way to create an array.
  * `array[0]`: **Computed** member access. 마찬가지로 subroutine의 경우 괄호 붙여주기. "Computed"의 의미는... `array[0]`과 `array[1+1-2]`의 결과는 동일하다.
* object는 object/array를 property로 가질 수 있고, array 또한 element로 object를 가질 수 있다.  
* `.`/`[]` syntax를 혼합해서 사용할 수 있다. 



### Tips
* `window`: 모든 변수 리스트를 확인할 수 있는 warehouse.