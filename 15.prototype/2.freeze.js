// 1. Object.freeze 객체를 동결시킴
// 추가, 삭제, 쓰기, 속성 재정의 불가능
const jicheol = {name: 'jicheol'};
const dog = {name: 'wow', emoji: 'dog-dog', owner: jicheol};

Object.freeze(dog);

dog.name = 'krrrrrrr'; // 동결된 객체는 수정 불가
console.log(dog);

dog.age = 4; // 동결된 객체는 수정 불가
console.log(dog);

delete dog.name; // 동결된 객체는 수정 불가
console.log(dog);

// 단 shallow copy가 됨
jicheol.name = 'shit'; // 중첩된 객체는 수정 가능
console.log(dog);


// 2. Object.seal 객체를 밀봉시킴
// 수정은 가능
// 추가, 삭제, 쓰기, 속성 재정의 불가능
const cat = {...dog};

Object.seal(cat);

cat.name = 'nyaaaaaa'; // 밀봉된 객체는 수정 가능
console.log(cat);

delete cat.name; // 밀봉된 객체는 삭제 불가
console.log(cat);

// 동결, 밀봉 되었는지 확인하는 함수
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));
console.log(Object.isFrozen(cat));
console.log(Object.isSealed(cat));

// 3. preventExtensions
// 확장만 막아주는 함수
// 수정, 삭제 가능
// 추가만 불가능
const tiger = {name: 'white-tiger'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));

tiger.name = 'black-tiger'; // 수정 가능
console.log(tiger);

delete tiger.name; // 삭제 가능
console.log(tiger);

tiger.age = 2; // 추가 불가능
console.log(tiger);