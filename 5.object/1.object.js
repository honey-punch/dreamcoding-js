// object literal {key: value}
// new Object();
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)
let apple = {
  name: 'apple',
  'hello-bye': '😀', // 일반적으로는 이렇게 작성 안하고 camelCase로 작성
  0: 1,
  ['hello-bye']: '^^',
}
apple.name; // 마침표 표기법
console.log(apple['hello-bye']); // 대괄호 표기법
console.log(apple['name']);

// 속성 추가
apple.emoji = '🍈';
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);