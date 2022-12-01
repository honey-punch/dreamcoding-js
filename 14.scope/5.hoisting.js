// 변수, 함수, 클래스 선언문을 끌어올리는 것을 말함
// 변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 올림
// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('hello');
}


// 변수(let, const)와 클래스는 선언만 호이스팅되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일 에러 발생

// console.log(hi); // error
let hi = 'hi';

// console.log(func1); // error
let func1 = function() {};

// const cat = new Cat(); // errorx
class Cat {}

