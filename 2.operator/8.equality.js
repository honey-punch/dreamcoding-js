// 동등 비교 관계 연산자
// == 값이 같음
// != 값이 다름
// === 값과 타입이 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 == 3);
console.log(2 != 3);
console.log(2 != 2);
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

console.clear();

const obj1 = {
  name: 'js',
}
const obj2 = {
  name: 'js',
}

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

const obj3 = obj2;

console.log(obj2 == obj3);
console.log(obj2 === obj3);