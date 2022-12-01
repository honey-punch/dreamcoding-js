// 전개구문
// 모든 iterable은 spread 될 수 있다
// func(...iterable)
// [...iterable]
// {...obj}
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4, 5)

// array concat
const fruit1 = ['🍈', '🍊'];
const fruit2 = ['🍍', '🍒'];
let arr = fruit1.concat(fruit2);
console.log(arr);
arr = [...fruit1, ...fruit2];
console.log(arr);

// object
const obj = {
  name: 'name',
  age: 20,
  home: {
    address: 'seoul',
  }
}
const update = {
  ...obj,
  sex: 'male',
}
obj.home.address = 'aa'
console.log(obj);
console.log(update);