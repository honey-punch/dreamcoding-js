// let 재할당 가능
let a = 1;
a = 2;

// const 재할당 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hi';
// text = 'hello'; // error 
console.log(text);

// 1. 상수
const MAX_FRUITS = 5; // 대문자, 단어 사이에는 _로 분리

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍈'
}
// apple = {}; // error

console.log(apple);
apple.name = 'orange'; // 이건 가능
console.log(apple);