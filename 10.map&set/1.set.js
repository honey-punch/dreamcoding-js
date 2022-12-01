// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for(const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set); // 중복 안됨!!

// 삭제
set.delete(6);
console.log(set);

// 전부삭제
set.clear();
console.log(set);
console.log(set.size);

// 오브젝트 세트
const obj1 = {name: '🍈', price: 8};
const obj2 = {name: '🍊', price: 5};
const objs = new Set([obj1, obj2]);
console.log(objs);

// quiz
obj1.price = 10;
objs.add(obj1);
console.log(objs); // 중복으로 인식

// quiz
const obj3 = {name: '🍊', price: 5};
objs.add(obj3);
console.log(objs); // 중복으로 인식 ❌