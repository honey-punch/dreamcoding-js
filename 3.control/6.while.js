// while(조건) {}
// 조건이 false가 될때까지 {}코드를 반복
let num = 5;
while(num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('still alive');
  if (i === 1000) {
    break;
  }
  i++;
}

// do while은 무조건 처음 한번 실행
do {
  console.log('still alive');
} while (isActive) {
  
}