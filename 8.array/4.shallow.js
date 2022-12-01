// shallow copy
// 객체는 메모리주소가 전달되기 때문
// Array.from, concat, slice, spread, Object.assign -> 새로운 객체가 만들어지는게 아니고 얕은 카피가 이루어짐
const pizza = {name: 'pizza', price: 2 };
const ramen = {name: 'ramen', price: 3};
const sushi = {name: 'sushi', price: 1};

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log(store1);
console.log(store2);

store2.push(sushi);
console.log(store1);
console.log(store2);

pizza.price = 4;
console.log(store1);
console.log(store2);

