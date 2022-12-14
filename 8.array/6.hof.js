const fruits = ['π', 'π', 'π', 'π'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// λ°°μ΄μ λλ©΄μ μνλ κ²(μ½λ°±ν¨μ)μ ν λ
fruits.forEach((e) => {
  console.log(e);
})

// μ‘°κ±΄μ λ§λ μ½λ°±ν¨μλ‘ μμ΄νμ μ°Ύμλ
// find: μ μΌλ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = {name: 'milk', price: 2};
const item2 = {name: 'cookie', price: 3};
const item3 = {name: 'kim-bob', price: 1};
const products = [item1, item2, item3, item2];
let result = products.find((e) => {
  return e.name === 'cookie';
});
console.log(result);

// findIndex: μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€ λ°ν
result = products.findIndex((e) => {
  return e.name === 'cookie';
});
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.some((item) => item.name === 'cookie');
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((item) => item.name === 'cookie');
console.log(result);

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘ λ°ν
result = products.filter((item) => item.name === 'cookie');
console.log(result);

console.clear();

// map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map((e) => e * 2)
console.log(result);

result = nums.map((e) => {
  if (e % 2 === 0) {
    return e * 2;
  } else {
    return e;
  }
})
console.log(result);

// flatmap: 
result = nums.map(item => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((item) => item.split(''));
console.log(result);

// sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬, κΈ°μ‘΄μ λ°°μ΄ λ³κ²½
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 10];
numbers.sort();
console.log(numbers);
// λ¦¬ν΄νλ κ°μ΄ 0λ³΄λ€ ν¬λ€λ©΄ aκ° μμΌλ‘ μ λ ¬ / μ€λ¦μ°¨μ
// λ¦¬ν΄νλ κ°μ΄ 0λ³΄λ€ μλ€λ©΄ bκ° μμΌλ‘ μ λ ¬ / λ΄λ¦Όμ°¨μ
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce λ°°μ΄μ μμλ€μ μ μ΄μ κ°μ νλλ‘
result = [1,2,3,4,5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);

