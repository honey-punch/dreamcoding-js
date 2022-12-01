// 반복문
// for(변수선언문; 조건식; 증감식) {}
// 실행순서:
// 1. 변수선언문
// 2. 조건식이 참이면 {} 코드블럭 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때가지 2번과 3번을 반복함
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 중첩 가능
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 주의할점
// 조건식이 언젠가는 거짓이 되어야함
// 무한루프 -> 어플리케이션이 끝나지 않음
// for(;;) {
//   console.log('😿');
// }

// 반복문 제어: continue, break
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log('i가 드디어 10이 되었다');
    continue; // 밑의 코드가 실행되지 않고 바로 다음 반복으로 넘어감
    break;
  }
  console.log(i);
}