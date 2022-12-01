// 구조분해할당
const fruits = ['🍈', '🍊', '🍍', '🍒'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(...others);

const point = [1, 2];
const [y, x, z=0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍈'];
}
const [title, emoji] = createEmoji();
console.log(title);

const jicheol = {name: 'jicheol', age: 31, job: 'designer'};
function display({name, age, job}) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(jicheol);

const {name, age, job} = jicheol;
console.log(name);
console.log(age);
console.log(job);