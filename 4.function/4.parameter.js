// 매개변수를 전달하지 않으면 기본값은 undefined
// 매개변수 기본값(default parameters) 설정 가능 a = 1, b = 1 ...
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments); // 전달된 인자 정보 확인
  console.log(arguments[0]);
  console.log(arguments[1]); 
  return a + b;
}
// add(1, 2, 3);
add();

// rest parameters
function sum(a, b, ...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7)
