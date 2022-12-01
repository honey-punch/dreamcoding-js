// Map
// 키와 값으로 이루어짐
// 키의 이름은 유일해야하며 값은 중복 가능
// 키와 밸류의 순서가 달라도 상관 없음
const map = new Map([
  ['key1', '🍈'],
  ['key2', '🍊'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1')); // key로 확인
console.log(map.has('key3'));

// 순회
map.forEach((value, key) => {
  console.log(key, value);
})
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 밸류 접근
console.log(map.get('key1'));
console.log(map.get('key2'));

// 추가
map.set('key3', '🍍');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 객체와의 차이점
const key = {name: 'milk', price: 10};
const milk = {name: 'milk', price: 10, taste: '맛있는 우유'};
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);

console.log(obj[key]);
console.log(map2.get(key));

