function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return{value: callback(num++), done: num > maxValue};
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, (num) => num * 2)
const log = makeIterable(0, 20, (num) => num)
for (const num of multiple) {
  console.log(num);
}
for (const num of log) {
  console.log(num);
}