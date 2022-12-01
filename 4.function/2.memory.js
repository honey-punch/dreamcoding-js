function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add;

console.log(sum());
console.log(add(1,2));
