// 배열
let array = new Array(3) // 하나만 전달하면 사이즈
console.log(array);

array = new Array(1, 2, 3) // 여러개 전달하면 배열 안의 프로퍼티
console.log(array);

array = Array.of(1, 2) // static함수인 of를 이용
console.log(array);

let anotherArray = [1, 2, 3, 4]; // 배열 리터럴
console.log(anotherArray);

array = Array.from(anotherArray) // static함수인 from를 이용
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져있어야함
// 하지만 js에서의 배열은 연속적으로 이어져있지 않음
// 객체와 유사
// js의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체!
// 이걸 보완하기 위해서 타입이 정해져있는 타입배열이 있음
array = Array.from({
  0: 'h',
  1: 'i',
  length: 2,
});
console.log(array);
console.log(array[0]);
console.log(array.length);

