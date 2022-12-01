// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 나쁨
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야함
// 원시값 - 값에의한 복사
// 객체 - 참조에 의한 복사
function display(num) {
  num = 5
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = 'b'; // ❌❌❌❌❌❌❌ 외부로부터 주어진 인자의 값을 바꾸는 것은 나쁨
  console.log(obj);
}
const a = {name: 'a'};
displayObj(a);