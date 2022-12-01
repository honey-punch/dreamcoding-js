// 사용예제1
function add(a, b) {
  console.log('function');
  return a + b;
}
const result = add(1, 2);
console.log(result);

// 사용예제2
let lastName = 'kim';
let firstName = 'jisu';
let lastName2 = 'park';
let firstName2 = 'cheol';


function fullName(firstName, lastName) {
  return `hi! ${firstName} ${lastName}`;
}
console.log(fullName(lastName, firstName));
console.log(fullName(lastName2, firstName2));

