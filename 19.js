/**
 * 19. 프로토 타입
 *
 * js는 명령형 (imperative) / 함수형 (functional) / 프로토타입 (prototype-based) / 객체지향 (oop object oriented programming)을
 * 지원하는멀티 패러다임 프로그래밍 언어
 *
 * 클래스 기바 객체지향 프로그래밍 언어의 특징인 클래스와 상속, 캡슐화를 위한 키워드인
 * public, private, protected 등이 없어서 js는 객체지향 언어 가 아나리가 오해가 많음
 *
 * js는 클래스 기반 객체지향언어보다 효율적이며, 더 강력한 객체지향 프로그래밍 능력지니고있는 프로토타입 기반의 객체지향 언어임
 */

/**
 * 클래스
 * class
 * es6 사실 클래스도 함수이며, 기존 프로토타입 기반 패턴의 문법적 설탕이라고 볼 수 있음
 *
 * 클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않음
 *
 * 클래스 생성자 함수보다 엄격하며 클래스는 생성자 함수에서는 제공하지 않는 기능도 제공한다.
 *
 * js는 객체기반의 프로그래밍 언어이며 js를 이루고있는 거의 모든것이 객체
 * 원시타입의 값을 제외한 나머지 값들은 모두 객체
 */

/**
 * 객체지향 프로그래밍
 * 객체지향 프로그래밍은 프로그램을 명령어 또는 함수의 목록으로 보는 전통적인 명령형 프로그래밍의 절차지향적 관점에서 벗어나
 * 여러개 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 지칭함
 *
 * 객체지향 프로그래밍은 실세계의 실체를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다.
 * 실체는 특징이나 성질을 나타내는 속성을 가지고있는 이를통해 실체를 인식하거나 구별할수 있음
 */

// 19 - 01

const person = {
  name: "Lee",
  address: "Seoul",
};
console.log(person);

/**
 * 속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라하며,
 * 객체지향 프로그래밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임
 */

// 19 - 02
const circle = {
  radius: 5, // 원의 지름
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  getArea() {
    return Math.PI * this.radius ** 2;
  },
};
console.log(circle);

console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());

/**
 * 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각함
 *
 * 객체는 상태데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조하고 할 수 있음
 *
 * 객체의 상태 데이터를 프로퍼티, 동작을 메서드라고 부름
 *
 * 객체는 고유의 기능을 갖는 독립적인 부품으로 볼 수 있지만, 자신의 고유한 기능을 수행하면서 다른 객체와 관계성을 가질 수 있다.
 *
 * 다른 객체와 메세지를 주고받거나 데이터를 처리할 수도 있다.
 *
 * 다른 객체의 상태 데이터나 동작을 상속받아 사용하기도한다.
 */

/**
 * 19.2 상속과 프로토타입
 *
 * 상속은 객체지향 프로그래밍의 핵심 개념으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속 받아 그래도 사용할수있다는것을 말함
 *
 * js는 포토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.
 *
 * 중복을 제거하는 방법은 기존의 코드를 적극적으로 재사용할 수 있음
 * 코드 재사용은 개발비용을 현저히 주일 수 있는 잠재력이 있으므로 매우중요함
 */

// 19 - 03
//생성자 함수
function circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    //Math.PI는 원주율을 나태내는 상수다.
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new circle(2);

/**
 * Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
 * getArea 메서드를 중복생성하고 모든 인스턴스가 중복 소유한다.
 * getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직
 */
console.log(circle.getArea === circle2.getArea); // false
console.log(circle1.getArea());
console.log(circle2.getArea());

/**
 * 생성자 함수에 의해 생성된 모든 인스턴스가 동일한 메서드를 중복 소유하는 것은 메모리를 불필요하게 낭비함
 * 또한 인스턴스를 생성할때마다 메서드를 생성하므로 퍼포먼스에도 악영향을 끼침
 *
 * 만약 10개의 인스턴스를 생성하면 내용이 동일한 메서드도 10개 생성된다.
 */

// 19 - 04
//생성자 함수
function Circle(radius) {
  this.radius = radius;
}
/**
 * Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
 * 공유해서 사용할 수 있도록 프로토타입에 추가함
 * 프로토타입은 Circle 생성자의 prototype 프로퍼티에 바인되어있음
 */
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle3 = new Circle(3);
const circle4 = new Circle(4);

/**
 * Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
 * 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받음
 * 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유함
 */
console.log(circle3.getArea === circle4.getArea); // true
console.log(circle3.getArea());
console.log(circle4.getArea());
