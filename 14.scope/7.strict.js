// 엄격모드
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
'use strict';
// 변수 삭제 불가능
// let x = 1;
// delete x;

function add(x) {
  var a = 2;
  // b = a + x; // error
}
add(1);

const array = [1, 2, 3];
for (let num of array) {
  console.log(num);
}