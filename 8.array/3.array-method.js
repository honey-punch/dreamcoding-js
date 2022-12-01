// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지가 관건
const fruits = ['🍈', '🍊', '🍍', '🍒'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템 위치확인
console.log(fruits.indexOf('🍈'));

// 배열안의 특정한 아이템이 있는지
console.log(fruits.includes('🍈'));

// 추가 - 제일 뒤
fruits.push('⭐️'); // 배열 자체를 변경
console.log(fruits);
console.log(fruits.length);

// 추가 - 제일 앞
fruits.unshift('✨'); // 배열 자체를 변경
console.log(fruits);
console.log(fruits.length);

// 제거 - 제일 뒤
let deletedItem = fruits.pop(); // 배열 자체를 변경
console.log(fruits);
console.log(fruits.length);
console.log(deletedItem);

// 제거 - 제일 앞
deletedItem = fruits.shift(); // 배열 자체를 변경
console.log(fruits);
console.log(fruits.length);
console.log(deletedItem);

// 중간 추가 또는 삭제
deletedItem = fruits.splice(0, 1); // 배열 자체를 변경
console.log(fruits);
console.log(fruits.length);
console.log(deletedItem);

fruits.splice(1, 0, '😿'); // 삭제하려는 인덱스, 갯수, 추가하려는 아이템
console.log(fruits);

// 잘라진 새로운 배열을 만드는 함수
let newArray = fruits.slice(0, 2) // 시작하는 인덱스(포함), 끝나는 인덱스(포함x)
// 인자로 아무것도 전달하지 않으면 배열 전체를 반환
// 양수 하나만 넣으면 해당 인덱스부터 끝까지
// 음수 하나만 넣으면 뒤에서부터 한칸씩
console.log(newArray);
console.log(fruits);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();
// 중첩 배열을 하나의 배열로
let arr = [
  [1, 2, 3], [4, [5, 6]]
];
console.log(arr);
console.log(arr.flat(2)); // 새로운 배열 반환 / 몇번 중첩까지 풀지를 인자로 전달
// 전달 안하면 1단계만 풀어줌
console.log(arr);

// 특정한 값을 배열을 채우기
arr.fill('s', 1); // 배열 자체 수정
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join(' | ');
console.log(text);
