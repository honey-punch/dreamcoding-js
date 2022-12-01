// 0부터 10이하의 숫자의 2배를 순회하는 이터레이터 만들기!
// 0, 1, 2 ... 9
// 0, 2, 4 ... 18
// [Symbol.iterator](): Iterator{ next(): {value, done}}]

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return {value: num++ * 2, done: num > max};
      }
    }
  }
}
for (const num of multiple) {
  console.log(num);
}
