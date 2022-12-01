// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력
// 5, 순회하는 숫자의 두배값을 출력
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function print(a) {
  console.log(a);
}
function printDouble(a) {
  console.log(a * 2);
}

iterate(5, print);
iterate(5, printDouble);
iterate(5, (a) => {console.log(a);});
iterate(5, (a) => {console.log(a * 2);});

// 실제 활용 예
setTimeout(() => {
  console.log('3초뒤 실행');
}, 3000);

