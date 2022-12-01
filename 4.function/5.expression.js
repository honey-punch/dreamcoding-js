// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}
let add = function (a, b) {
  return a + b;
}
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
add = (a, b) => {
  return a + b;
}
console.log(add(1, 2));

// 바로 값만 return하는 경우라면
add = (a, b) => a + b; // 이렇게 생략 가능
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서!!
// IIF(immediately invoked function expression) 즉시 호출 함수
(function run() {
  console.log('emoji');
})();

