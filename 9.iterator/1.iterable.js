// iterable하다는 것은 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회가능한 객체다.
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread 연산자 사용 가능
const array = [1, 2, 3];
// for of 연산자
for(const e of array.entries()) {
  console.log(e);
}

const iterator = array.values();
// for (const item of iterator) {
//   console.log(item);
// }
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done); // 반복이 끝났는지 여부

while(true) {
  const item = iterator.next();
  if (item.done) {
    break;
  }
  console.log(item.value);
}