// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const array1 = ['🍌', '🍓', '🍇', '🍓'];
function changeItem(array, oldValue, newValue) {
  const newArray = Array.from(array);
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === oldValue) {
      newArray[i] = newValue;
    }
  }
  return newArray;
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
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      count++;
    }
  }
  return count;
}
console.log(countItems(array2, '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ] 
const array3 = ['🍌', '🥝', '🍇'];
const array4 = ['🍌', '🍓', '🍇', '🍓'];
function intersection(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1.includes(array2[i])) {
      newArray.push(array2[i]);
    }
  }
  return newArray;
}

const result2 = intersection(array3, array4);
console.log(result2);
