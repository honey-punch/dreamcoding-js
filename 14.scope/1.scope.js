// scope 범위, 영역
// 변수를 참조할 수 있는 유효한 범위
// 코드 블럭에 의해 결정 : {}, if() {}, for() {}, function() {}
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없음
{
  const a = 'a';
  console.log(a);
}
const b = 'b';
//console.log(a);

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없음
function print() {
  const message = 'aaa';
  console.log(message);
}
print();

function sum(a, b) {
  console.log(a, b);
}
sum(1, 2);
// console.log(a, b);