// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const array1 = ['🍌', '🍓', '🍇', '🍓'];

function changeItem(array, oldValue, newValue) {
  // return array.map(item => {return item === oldValue ? newValue : item})
  return array.map(item => {
    if (item === oldValue) {
      return newValue;
    } else {
      return item;
    }
  })
}
const result = changeItem(array1, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const array2 = [ '🍌', '🥝', '🍇', '🥝' ];

function countItems(array, element) {
  // 답1
  // return array.filter((item) => item === element).length;

  // 답2
  return array.reduce((count, item) => {
    if (item === element) {
      count++;
    }
    return count;
  }, 0)

  // 답3(내가 한거)
  // let count = 0
  // array.forEach((e, i) => {array[i] === element? count++ : count});
  // return count;
}
console.log(countItems(array2, '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ] 
const array3 = ['🍌', '🥝', '🍇'];
const array4 = ['🍌', '🍓', '🍇', '🍓'];

function intersection(array1, array2) {
  let result = array1.filter(e => array2.includes(e));
  return result;
}

const result2 = intersection(array3, array4);
console.log(result2);

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
function average(array) {
  // let result = array.filter(e => e > 5);
  // let total = result.reduce((sum, value) => { return sum += value;}, 0);
  // return total / result.length;

  let result = nums
  .filter((num) => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0)
}
const result3 = average(nums);
console.log(result3);