const fruits = ['🍈', '🍊', '🍍', '🍒'];

// 배열 아이템을 참조하는 방법;
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식 💩
// 숫자를 잘못 입력하면 덮어씌워지거나 중간에 공백이 생김
fruits[4] = '⭐️';
console.log(fruits);
// 삭제된 부분이 공백으로 남아있음
delete fruits[1];
console.log(fruits);