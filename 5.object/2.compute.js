const obj = {
  name: 'jicheol',
  age: 20,
};
// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
function getValue(obj, key) {
  // return obj.key; // obj 안에 key라는 이름의 key가 없기때문에 동작 안함, key를 인자로 받아 오는것이 아닌 key라는 key를 찾음
  return obj[key]; // 대괄호 표기법으로 작성해야 key를 인자로 인식
}
console.log(getValue(obj,'name'));
console.log(getValue(obj,'age'));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'sex', 'male');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'age');
console.log(obj);