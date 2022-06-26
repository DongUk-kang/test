/**
 * 13 스코프
 * 프로그래밍 언어의 기본적이며 중요한 개념
 * 
 * var 키워드로 선언한 변수와 let, const 키워드로 선언한 변수의 스코프도 다르게 작동
 * 스코프는 변수및 함수와 깊은 관련이있음
 */

// 13 - 1
function add(x, y) {
    /**
     * 매개변수는 함수 몸체 내부에서만 참조할 수 있음
     * 즉, 매개변수의 스코프는 함수 몸체 내부
     */
    console.log(x, y);
    return x + y;
}
add(2, 5);
// 매개 변수는 함수 몸체 내부에서만 참조 할 수 있음
console.log(x, y); // 레퍼런스 에러발생

/**
 * 변수는 코드의 가장 바깥 영역뿐 아니라 코드 블록이나 함수 몸체 내에서도 선언가능
 * 이때 코드블록이나 함수는 중첩될 수 있음
 */

// 13 - 2
var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수

if (true) {
    var var2 = 2; // 코드 블록 내에서 선언한 변수
    if (true) {
        var var3 = 3;
    }
}

function foo() {
    var var4 = 4; // 함수 내에서 선언한 변수
    function bar() {
        var var5 = 5; // 중첩된 함수내에서 선언한 변수
    }
}
console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // 레퍼런스에러
console.log(var5);  // 레퍼런스 에러

/**
 * 변수는 자신이 선언된 위치에 의해 자신이 유효한 범위, 즉 다른 코드가 변수 자신을 참조할수 있는 범위가 결정
 * 변수뿐만 아니라 모든 식별자가 동일
 * 모든 식별자 (변수이름, 함수 이름 ,클래스 이름 등등 )는 자신이 선언된 위치에 의해 다른코드가 식별자 자신을 참조할 수 있는 유효범위가 결정
 * 이를 스코프라고 지칭 즉, 소코프는 식별자가 유효한 범위를 말함
 */

// 13 - 3
var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);
}

foo();
console.log(x)

/**
 * 코드의 가장 바깥 영역과 foo함수 내부에 같은 이름을 갖는 x 변수를 선언했고 1,2에서 x 변수를 참조함
 * 
 * 이때 js엔진은 이름이 같은 두개의 변수 중에서 어떤 변수를 참조해야할것인지를 결정해야함
 * 이를 식별자 결저잉라고함
 * 
 * js엔진은 스코프를 통해 어떤 변수를 참조할것인지 결정
 * 스코프란 js 엔진이 식별자를 검색할때 사용하는 규칙이라고할수 있음
 * 
 * js 엔진은 코드를 실행할때 코드의 문맥을 고려함
 * 코드가 어디서 실행되며 주변에 어떤 코드가있는지에 따라 예제처럼 동일한 코드도 다른 결과가 나옴
 * 
 * 13 - 2 예제에서 코드의 가장 바깥 영역에 선언된 x 변수는 어디서든 참조할 수 있음
 * 하지만 foo 함수 내부에서 선언된 x 변수는 foo 함수 내부에서만 참조할 수 있고 foo 함수 외부에서는 참조 할 수 없음
 * 
 * 이때 두개의 x 변수는 식별자 이름이 동일하지만 자신이 유효한 범위, 즉 소코프가 다른 별개의 변수
 * 
 * 스코프라는 개념이 없다면 같은 이름을 갖는 변수는 충돌을 일으키므로 프로그램 전체에서 하나밖에 사용할수없음
 * 
 * 변수나 함수의 이름과 같은 식별자는 어떤값을 구별하여 식별 해낼 수 있는 고유한 이름을 말함
 * 사람을 고유한 이름으로 구별하듯이 값도 사람이 이해할수 있는 언어로 지정한 고유한 식별자인 변수이름에 의해 구별해여 참조할 수 있음
 * 
 * 식별자는 어떤 값을 구별할 수 있어야 하므로 유일해야함
 * 
 * 따라서 식별자인 변수 이름은 중복될 수 없음
 * 즉 하나의 값은 유일한 식별자에 연결되어야함
 * 
 * 예를 들어, 파일 이름은 하나의 파일을 구별하여 식별할 수 있는 식별자임
 * 
 * 식별자인 파일 이름은 유일해야한다 하지만, 컴퓨터를 사용할때 하나의 파일이름만 사용하지 않음
 * 
 * 식별자인 파일 이름을 중복해서 사용할 수 이유는 폴더라는 개념이 있기 때문에 가능
 * 
 * 만약 폴가 없다면 파일 이름은 유일해야함
 * 
 * 컴퓨터 전체를 통틀어 하나의 파일이름만 사용해야 한다면 파일 이름을 만드는 것이 무척이나 번거로워짐
 * 
 * 프로그래밍언어 에서는 스코프를 통해 식별자인 변수 이름의 충돌을 방지하여 같은 이름의 변수를 사용할 수 있게함
 * 스코프 내 에서 식별자는 유일해야 하지만 다른 스코프에는 동일한 이름의 식별자를 사용할 수 있음
 * 즉, 스코프는 네임스페이스 임
 */

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용됨
// 의도치않게 변수값이 재할당되어 변경되는 부작용을 발생시킨다.

// 13 - 4
// var 키워드 사용 예시
function foo() {
    var x = 1;
    // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용함
    // 아래 변수 선언문의 js 엔진의 의해 var 키워드가 없는것처럼 동작함
    var x = 2;
    console.log(x); // 2
}
foo();

// let이나 const 키워드로 선언된 변수는 같은 스코프내에서 중복선언 허용하지 않음
function bar() {
    let x = 1;
    //let 이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복선언을 허용하지 않음
    // let x = 2; // 문법에러 발생
}
bar();
