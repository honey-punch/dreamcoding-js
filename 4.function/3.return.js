function add(a, b) {
  // return a + b; // return을 명시적으로 하지 않으면 undefined이 반환됨
}
const result = add(1, 2);
console.log(result);

function print(num) {
  if (num < 0) {
    return; // 원하는 조건이 아닐때 함수를 조기종료하는 활용 예제
  }
  console.log(num);
}
print(12);
print(-12)
